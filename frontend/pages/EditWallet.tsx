import {FC, useEffect, useState} from "react";
import "../css/EditForm.css"
import {Controller, FormProvider, useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import Select, {components} from "react-select";
import {currency} from "../config/currency.ts";
const { Option } = components;


export const EditWallet: FC = () => {

    const navigation = useNavigate();
    const [userId, setUserId] = useState<string | null>(null);
    const methods  = useForm({
        defaultValues: {
            amount: 0,
            currency: null,
        },
    });
    const { reset, control, register, handleSubmit } = methods;
    const { user_id, wallet_id } = useParams();


    const token = localStorage.getItem("token");

    const getUser = async (user_id: string) => {
        const response = await fetch(`http://localhost:3001/user/${user_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json();
        const formattedWallet = {
            amount: data.amount,
            currency: data.currency
        }
        reset(formattedWallet);
    }

    useEffect(() => {
        (async () => {
            await getUser(user_id!);

            if (token) {
                const base64Payload = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(base64Payload));

                setUserId(decodedPayload['user_id']);
            }
        })()
    }, []);

    const onSubmit = async (data: any) => {
        try {
            await fetch(`http://localhost:3001/wallet/${wallet_id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            navigation(`/dashboard/${userId}`);

        } catch (e) {
            console.error('Failed to update wallet', e);
        }
    }

    const OptionComponent: FC<any> = (props) => {
        return(
            <Option {...props}>
                <span className={`currency-flag currency-flag-${props.data.value}`}></span>
                {" "}
                {props.data.label}
            </Option>
        )
    }

    return (
        <>
            <FormProvider {...methods}>
                <section className={"register-section"}>
                    <div className="register-wrapper">
                        <h1 className={"register-title"}>Edit Wallet</h1>
                        <form className={"register-form"} onSubmit={handleSubmit(onSubmit)}>
                            <input className={"reg-input"} required={true} {...register("amount")} type={"number"} placeholder={"Amount"}/>
                            <Controller
                                name="currency"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={currency}
                                        placeholder={"Select a currency"}
                                        components={{Option: OptionComponent}}
                                        onChange={(selected) => field.onChange(selected?.value || null)}
                                        value={currency.find(opt => opt.value === field.value)}
                                        required={true}
                                    />
                                )}
                            />
                            <button className={"button-action"} type={'submit'}>Edit</button>
                        </form>
                    </div>
                </section>
            </FormProvider>
        </>

    )
}
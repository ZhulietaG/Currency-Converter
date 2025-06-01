import {FC, useEffect, useState} from "react";
import {Button} from "../components";
import {useNavigate} from "react-router-dom";
import {Controller,useForm} from "react-hook-form";
import "../css/Register.css";
import Select, {components} from "react-select";
import {currency} from "../config/currency";
const { Option } = components;

export const CreateWallet: FC = () => {

    const navigation = useNavigate();
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            amount: 0,
            currency: null,
        },
    });
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const base64Payload = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(base64Payload));

            setUserId(decodedPayload['id']);
            console.log(userId)
        }
    }, []);


    const onSubmit = async (data: any)=> {
        try{
            await fetch(`http://localhost:3001/wallet/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            navigation(`/dashboard/${userId}`);
        }
        catch(err){
            console.error("Wallet creation unsuccessful.\n", err);
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
        <section className={"register-section"}>
            <div className="register-wrapper">
                <h2 className={"register-title"}>ADD Wallet</h2>
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
                    <Button text={"Add Wallet"} onClick={console.log}></Button>
                </form>
            </div>
        </section>
    )

}
import {FC, useEffect, useState} from "react";
import "../css/EditForm.css"
import {react, useForm} from "react-hook-form";
import {Form} from "../components/Form";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "../components";

export const EditWallet: FC = () => {

    const navigation = useNavigate();
    const { register, handleSubmit, getValues } = useForm();
    const [userId, setUserId] = useState<string | null>(null);
    const [walletData, setWalletData] = useState<Wallet | null>(null);
    const { walletId } = useParams();


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const base64Payload = token.split('.')[1];
            const decodedPayload = JSON.parse(atob(base64Payload));

            setUserId(decodedPayload['id']);
            console.log(userId)
        }


    }, []);

    const Deposit = async () => {
        const inputAmount = Number(getValues(`amount`));
        const oldAmount = Number(walletData.amount);

        const newAmount = inputAmount + oldAmount;
        await updateAmount(newAmount);
    }
    const Withdraw = async () => {
        const inputAmount = Number(getValues(`amount`));
        const oldAmount = Number(walletData.amount);

        const newAmount = inputAmount - oldAmount;

        await updateAmount(newAmount);
    }

    useEffect(() => {

        const fetchedData = async () => {
            const response = await fetch(`http://localhost:3001/wallet/${walletId}`)
            const data = await response.json();
            setWalletData(data);
            };
        fetchedData();
    }, []);

    const updateAmount = async (newAmount: number) => {
        try {

            await fetch(`http://localhost:3001/wallet/${walletId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAmount),
            })
            navigation(`/dashboard/${userId}`);

        } catch (e) {
            console.error('Failed to update wallet', e);
        }
    }

    if(!walletData){
        return <div>Loading...</div>
    }

    return (
        <>
            <section className={"section-edit"}>
                <div className={"edit-wrapper"}>
                    <h2 className={"edit-title"}>Edit account</h2>
                    <form className={"register-form"} onSubmit={handleSubmit(updateAmount)}>
                        <input className={"reg-input"} required={true} {...register("amount")} type={"number"} placeholder={"Amount"}/>
                        <p>Currency: {walletData.currency}</p>
                        <Button text={"Deposit"} onClick={() => {Deposit().then();}}></Button>
                        <Button text={"Withdraw"} onClick={() => {Withdraw().then();}}></Button>
                    </form>
                </div>
            </section>
        </>

    )
}
import {FC, useEffect, useState} from "react";
import {Button} from "../components";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../css/Register.css";

export const CreateWallet: FC = () => {

    const navigation = useNavigate();
    const { register, handleSubmit } = useForm();
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

    return (
        <section className={"register-section"}>
            <div className="register-wrapper">
                <h1 className={"register-title"}>Register</h1>
                <form className={"register-form"} onSubmit={handleSubmit(onSubmit)}>
                    <input className={"reg-input"} required={true} {...register("amount")} type={"number"} placeholder={"Amount"}/>
                    <input className={"reg-input"} required={true} {...register("currency")} type={"text"} placeholder={"Currency"}/>
                    <Button text={"Add Wallet"} onClick={console.log}></Button>
                </form>
            </div>
        </section>
    )

}
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import"../../css/Register.css"
import {Button} from "../../components";


export const RegistrationPage = () => {
    const navigation = useNavigate();
    const { register, handleSubmit } = useForm();
    const [existingEmails, setExistingEmails] = useState<boolean>(false)

    const onSubmit = async (data: any)=> {
        try{
            const result = await fetch('http://localhost:3001/emails');
            const emailList  = await result.json();
            const emailExists = emailList.some((item: any) => item.email === data.email);
            if (emailExists) {
                setExistingEmails(true);
                return;
            }
                await fetch("http://localhost:3001/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
            navigation('/users');
        }
        catch(err){
            console.error("User creation unsuccessful.\n", err);
        }

    }

    return (
        <section className={"register-section"}>
        <div className="register-wrapper">
            <h1 className={"register-title"}>No tralalelo maidens Form</h1>
            <form className={"register-form"} onSubmit={handleSubmit(onSubmit)}>
                <input className={"reg-input"} required={true} {...register("username")} type={"text"} placeholder={"Username"}/>
                <input className={"reg-input"} required={true} {...register("email")} type={"text"} placeholder={"Email"}/>
                {existingEmails && <p>Email already taken</p>}
                <input className={"reg-input"} required={true} {...register("password")} type={"password"} placeholder={"Password"}/>
                <Button text={"Register"} onClick={console.log}></Button>
            </form>
        </div>
        </section>
    )

}
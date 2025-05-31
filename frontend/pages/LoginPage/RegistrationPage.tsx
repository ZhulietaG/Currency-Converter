import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import"../../css/Register.css"


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
        <div className="registration-page">
            <h1>No tralalelo maidens Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"input-box"}>
                    <label>Username</label>
                    <input required={true} {...register("username")} type={"text"} placeholder={"Username"}/>
                </div>
                <div className={"input-box"}>
                    <label>Email</label>
                    <input required={true} {...register("email")} type={"text"} placeholder={"Email"}/>
                </div>
                {existingEmails && <p>Email already taken</p>}
                <div className={"input-box"}>
                    <label>Password</label>
                    <input required={true} {...register("password")} type={"password"} placeholder={"Password"}/>
                </div>

                <button className={"reg-btn"} type="submit">Register</button>
            </form>
        </div>
    )

}
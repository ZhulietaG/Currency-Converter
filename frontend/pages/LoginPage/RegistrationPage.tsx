import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {useState} from "react";


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
                <input required={true} {...register("username")} type={"text"} placeholder={"Username"}/>
                <input required={true} {...register("email")} type={"text"} placeholder={"Email"}/>
                {existingEmails && <p>Email already taken</p>}
                <input required={true} {...register("password")} type={"password"} placeholder={"Password"}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}
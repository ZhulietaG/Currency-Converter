import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";


export const RegistrationPage = () => {
    const navigation = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any)=> {
        console.log(JSON.stringify(data));
        try{
            await fetch("http://localhost:3001/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            navigation('/');
        }
        catch(err){
            console.error("User creation unsuccessful.\n", err);
        }

    }

    return (
        <div className="registration-page">
            <h1>No tralalelo maidens Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username")} type={"text"} placeholder={"Username"}/>
                <input {...register("email")} type={"text"} placeholder={"Email"}/>
                <input {...register("password")} type={"password"} placeholder={"Password"}/>
                <button type="submit">Register</button>
            </form>

        </div>
    )

}
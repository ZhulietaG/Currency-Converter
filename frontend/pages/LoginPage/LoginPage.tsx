import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import "../../css/Login.css"
import {Button} from "../../components";



interface LoginFormInputs {
    email: string;
    password: string;
}

// Using built-in browser property localStorage of Window interface for saving tokens
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

export const LoginPage = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<LoginFormInputs>();

    const onSubmit = async (data: LoginFormInputs)=> {
        try{
            const response = await fetch('http://localhost:3001/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(!response.ok){
                throw new Error("Login failed.");
            }

            alert('Successfully logged in!');

            const result = await response.json();

            localStorage.setItem('token', result.token);

            navigate(`/dashboard/${result.id}`);

        }
        catch(error){
            console.error('Error during login:', error);
            alert('Login failed. Please check your email and password.');
        }
    };

    return (
        <section className={"login-section"}>
            <div className={"login-wrapper"}>
                <h2 className={"login-title"}>LOGIN</h2>
                <form className={"form-container"} onSubmit={handleSubmit(onSubmit)}>
                    <input className={"form-input"} required={true} {...register("email")} type={"email"} placeholder={"Email address"}/>
                    <input className={"form-input"} required={true} {...register("password")} type={"password"} placeholder={"Password"}/>
                    <Button text={"Login"} onClick={console.log}></Button>
                </form>
            </div>
        </section>
    )

}
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import"../../css/Login.css"



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
        <div className={"login-page"}>
            <h1 className={"login-title"}>Bombardiro krokodilo LOGIN</h1>
            <form className={"login-form"} onSubmit={handleSubmit(onSubmit)}>
                <div className={"login-input-box"}>
                    <input className={"login-input"} required={true} {...register("email")} type={"email"} placeholder={"Email address"}/>
                </div>
                <div className={"login-input-box"}>
                    <input className={"login-input"} required={true} {...register("password")} type={"password"} placeholder={"Password"}/>
                </div>

                <button className={"login-btn"} type="submit">Login</button>
            </form>
        </div>
    )

}
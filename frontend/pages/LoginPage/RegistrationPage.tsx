import {useForm} from 'react-hook-form';

export const RegistrationPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any)=> {
        console.log(data);
    }

    return (
        <div className="registration-page">
            <h1>No tralalelo maidens Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={"text"} placeholder={"Username"}/>
                <input type={"text"} placeholder={"Email"}/>
                <input type={"password"} placeholder={"Password"}/>
                <button type="submit">Register</button>
            </form>

        </div>
    )

}
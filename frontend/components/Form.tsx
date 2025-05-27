import {useFormContext} from "react-hook-form";
import {FC} from "react";

interface FormProps {
    submitButtonLabel: string;
    onSubmit: (data: any) => void;
}

export const Form: FC<FormProps> = ({ onSubmit, submitButtonLabel }) => {
    const { handleSubmit, register } = useFormContext();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'text'} placeholder={'Username'} {...register('username')}/>
            <input type={'email'} placeholder={'Email'} {...register('email')}/>
            <input type={'password'} placeholder={'Password'} {...register('password')}/>
            <ul>
                <li><input defaultChecked={true} type={'radio'} value={1} {...register('is_active')}/>Active</li>
                <li><input type={'radio'} value={0} {...register('is_active')}/>Inactive</li>
            </ul>
            <button type={'submit'}>{submitButtonLabel}</button>
        </form>
    )
}
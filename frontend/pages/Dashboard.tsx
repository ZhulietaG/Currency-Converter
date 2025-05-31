import {useNavigate, useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect} from "react";
import {Form} from "../components/Form.tsx";

export const Dashboard = () => {
    const navigation = useNavigate();
    const methods = useForm();
    const { reset } = methods;
    const { id } = useParams();

    const getUser = async (id: string) => {
        const response = await fetch(`http://localhost:3001/user/${id}`)
        const data = await response.json();
        const formattedUser = {
            username: data.username,
            email: data.email,
            password: data.password,
            is_active: data.is_active ? "1" : "0"
        }
        reset(formattedUser);
    }

    useEffect(() => {
        (async () => {
            await getUser(id!);
        })()
    }, []);

    const onSubmit = async (data: any) => {
        try {
            await fetch(`http://localhost:3001/user/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            navigation('/users');
        } catch (e) {
            console.error('Failed to create user', e);
        }
    }

    return (
        <>
            <h1>Edit account</h1>
            <FormProvider {...methods}>
                <Form onSubmit={onSubmit} submitButtonLabel={'Edit'}/>
            </FormProvider>
        </>
    )
}
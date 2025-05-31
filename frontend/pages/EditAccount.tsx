import {useNavigate, useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Form} from "../components/Form.tsx";

export const EditAccount = () => {
    const navigation = useNavigate();
    const [userId, setUserId] = useState<string | null>(null);
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
            const token = localStorage.getItem("token");

            if (token) {
                const base64Payload = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(base64Payload));

                setUserId(decodedPayload['id']);
            }
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
            navigation(`/dashboard/${userId}`);

        } catch (e) {
            console.error('Failed to update user', e);
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
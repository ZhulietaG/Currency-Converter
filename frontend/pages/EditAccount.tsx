import {useNavigate, useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Form} from "../components/Form.tsx";
import "../css/EditForm.css"

export const EditAccount = () => {
    const navigation = useNavigate();
    const [userId, setUserId] = useState<string | null>(null);
    const methods = useForm();
    const { reset } = methods;
    const { id } = useParams();


    const token = localStorage.getItem("token");

    const getUser = async (id: string) => {
        const response = await fetch(`http://localhost:3001/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
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
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
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
            <section className={"section-edit"}>
                <div className={"edit-wrapper"}>
                    <h2 className={"edit-title"}>Edit account</h2>
                    <FormProvider {...methods}>
                        <Form onSubmit={onSubmit} submitButtonLabel={'Edit'}/>
                    </FormProvider>
                </div>
            </section>
        </>
    )
}
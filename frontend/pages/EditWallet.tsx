import {FC, useState} from "react";
import "../css/EditForm.css"
/*import {FormProvider, useForm} from "react-hook-form";
import {Form} from "../components/Form";
import {useNavigate, useParams} from "react-router-dom";*/

export const EditWallet: FC = () => {

/*    const navigation = useNavigate();
    const [walletId, setWalletId] = useState<string | null>(null);
    const methods = useForm();
    const { reset } = methods;
    const { id } = useParams();

    const token = localStorage.getItem("token");

    const getWallet = async (id: string) => {
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
    }*/

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
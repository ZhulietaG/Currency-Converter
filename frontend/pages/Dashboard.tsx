import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../components";


export const Dashboard = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");

            if (token) {
                console.log('Token found:', token);
                const base64Payload = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(base64Payload));

                console.log('Decoded Payload:', decodedPayload);

                setUserId(decodedPayload['id']);
            }
        })()
        }, []);


    console.log('userId before render:', userId);

    if (!userId) {
        return <div>Loading...</div>;
    }


    return(
        <>
            <div>
                <h1>Edit account information:</h1>
                <button onClick={() => navigate(`/edit-account/${userId}`)}>
                    Edit Account
                </button>

            </div>
        </>
        )
}
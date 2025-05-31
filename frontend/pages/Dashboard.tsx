import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../components";
import "../css/Dashboard.css"


export const Dashboard = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");

            if (token) {
                const base64Payload = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(base64Payload));

                setUserId(decodedPayload['id']);
            }
        })()
        }, []);


    return(
        <>
            <section className={"section-dashboard"}>
                <div className={"dashboard-wrapper"}>
                    <h2 className={""}>Edit account information:</h2>
                    <Button text={"Edit account"} onClick={() => navigate(`/edit-account/${userId}`)}/>
                </div>
            </section>
        </>
        )
}
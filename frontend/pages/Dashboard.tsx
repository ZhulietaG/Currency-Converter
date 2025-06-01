import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../components";
import "../css/Dashboard.css"

interface User {
    id: string;
    username: string;
    email: string;
}

export const Dashboard = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const [userData, setUserData] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
            const token = localStorage.getItem("token");

            if (token) {
                const base64Payload = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(base64Payload));

                setUserId(decodedPayload['id']);
            }
        }, []);

    useEffect(() => {
            const fetchedData = async () => {
                if (userId) {
                    const response = await fetch(`http://localhost:3001/user/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    const data = await response.json();
                    setUserData(data);
                }
            };
            fetchedData();
        }, [userId]);


    if (!userData){
        return <section className={"section-dashboard"}>
            <div className={"dashboard-wrapper"}>Loading profile...</div>
        </section>
    }

    return(
        <>
            <section className={"section-dashboard"}>\
                <h1>Welcome, {userData.username}!</h1>
                <div className={"dashboard-wrapper"}>
                    <h2>Profile Details:</h2>
                    <p>Email: address: {userData.email}</p>
                </div>
                <div className={"dashboard-wrapper"}>
                    <h2 className={""}>Edit Account Information:</h2>
                    <Button text={"Edit account"} onClick={() => navigate(`/edit-account/${userId}`)}/>
                </div>
                <div className={"dashboard-wrapper"}>
                    <h2>Wallet</h2>
                </div>
            </section>
        </>
        )
}
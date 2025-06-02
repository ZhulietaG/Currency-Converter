import {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Button, ListWallet} from "../components";
import "../css/Dashboard.css"

interface User {
    id: string;
    username: string;
    email: string;
}

export const Dashboard = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const {id} = useParams();
    const [userData, setUserData] = useState<User | null>(null);
    const navigate = useNavigate();
    const [wallets, setWallets] = useState<User[any]>([]);

    useEffect(() => {
            const token = localStorage.getItem("token");

            if (token) {
                const base64Payload = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(base64Payload));

                setUserId(decodedPayload['id']);
            }

            if(userId && id && userId != id) {
                alert("You don't have access to this dashboard.");
                navigate(`/dashboard/${userId}`);
            }

        }, [userId, id, navigate]);

    useEffect(() => {
            const fetchedData = async () => {
                if (userId) {
                    const responseUsers = await fetch(`http://localhost:3001/user/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    const dataUsers = await responseUsers.json();
                    setUserData(dataUsers);

                    const responseWallet = await fetch(`http://localhost:3001/wallets/${userId}`,{
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    const dataWallets = await responseWallet.json();
                    setWallets(dataWallets);
                }
            };
            fetchedData();
        }, [userId]);


    if (!userData){
        return <section className={"section-dashboard"}>
            <div className={"dashboard-wrapper"}>Loading profile...</div>
        </section>
    }


    const deleteWallet = async (id: string) => {
        try {
            await fetch(`http://localhost:3001/wallet/${id}`, {
                method: 'DELETE'
            });
            navigate(`/dashboard/${id}`);
        } catch (e) {
            console.error('Failed to delete user', e);
        }
    }

    const editWallet = (user_id: string, wallet_id: string) => {
        navigate(`/edit-wallet/${user_id}/${wallet_id}`);
    }

    return(
        <>
            <section className={"section-dashboard"}>
                <h2 className={"dashboard-title"}>Welcome, {userData.username}!</h2>
                <NavLink to={`/edit-account/${userId}`}>
                    <div className={"dashboard-profile"}>
                        <h2 className={"dashboard-profile-icon"}>👤</h2>
                        <p className={"dashboard-profile-text"}>Email: address: {userData.email}</p>
                    </div>
                </NavLink>
                <div className={"dashboard-wallet"}>
                    <ListWallet items={wallets} renderItem={(wallet: any) =>{
                        return (
                            <div className={"wallet-holder"}>
                                <span className={"wallet-amount"}>{wallet.amount} {wallet.currency.toUpperCase()}</span>
                                {userId && <Button text={'Edit'} onClick={() => editWallet(userId,wallet.id)}/>}
                                <Button text={'Delete'} onClick={() => deleteWallet(wallet.id)}/>
                            </div>
                        )
                    }}/>
                </div>
                <div className={"dashboard-create-wallet"}>
                    <Button text={"Create Wallet"} onClick={() => navigate(`/create-wallet/${userId}`)}/>
                </div>
            </section>
        </>
        )
}
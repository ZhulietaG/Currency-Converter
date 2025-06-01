import {FC, useState} from "react";
import {List} from "../components/List.tsx";
import {Button} from "../components";
import {useNavigate} from "react-router-dom";
import "../css/UsersOverview.css"

export const UsersOverview: FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<any[]>([])

    const getUsers = async () => {
        const result = await fetch('http://localhost:3001/user');
        const data = await result.json();
        setUsers(data);
    }

    const deleteUser = async (id: string) => {
        try {
            await fetch(`http://localhost:3001/user/${id}`, {
                method: 'DELETE'
            });
            await getUsers();
        } catch (e) {
            console.error('Failed to delete user', e);
        }
    }

    const editUser = (id: string) => {
        navigate(`/edit-account/${id}`);
    }

    return (
        <>
            <section className={"section-users"}>
                <List items={users} renderItem={(user) => {
                    return (
                        <>
                            <span className={"user-name"}>{user.username}</span>
                            <div className={"user-profile"}></div>
                            <div className={'actions'}>
                                <Button text={'Edit'} onClick={() => editUser(user.id)}/>
                                <Button text={'Delete'} onClick={() => deleteUser(user.id)}/>
                            </div>
                        </>
                    )
                }}/>
                <Button text={'Get Users'} onClick={getUsers}/>
            </section>
        </>
    )
}
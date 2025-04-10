import {FC, useState} from "react";
import {List} from "../components/List.tsx";
import {Button} from "../components";

export const UsersOverview: FC = () => {
    const [users, setUsers] = useState<any[]>([])

    const getUsers = async () => {
        const result = await fetch('http://localhost:3001/user');
        const data = await result.json();
        setUsers(data);
    }

    return (
        <>
            <List items={users} renderItem={(user) => user.username} />
            <Button text={'Get Users'} onClick={getUsers} />
        </>
    )
}
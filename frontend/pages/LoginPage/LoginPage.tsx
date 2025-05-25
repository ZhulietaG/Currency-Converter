import {NavLink, useNavigate} from "react-router-dom";

export const LoginPage = () => {

    const navigation = useNavigate();

    return (
        <NavLink to={"/registration"}>Registration</NavLink>
    )

}
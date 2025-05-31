import { FC } from "react";
import "../css/Navigation.css"
import {NavLink} from "react-router-dom";


export const Navigation: FC = () => {
    return (
        <header>
            <nav className={"navbar"}>
                <NavLink to={"/"} className={"nav-logo"}>
                    <h2 className={"logo-text"}>Grace to Gold</h2>
                </NavLink>
                <ul className={"nav-menu"}>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/"}>Home</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/about"}>About</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/login"}>Login</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/register "}>Register</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

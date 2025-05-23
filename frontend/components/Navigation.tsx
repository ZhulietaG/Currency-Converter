import { FC } from "react";
import "./Navigation.css"
import {NavLink} from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <nav>
            <div className={"logo"}>
                <img src={"vite.svg"} alt={""}/>
            </div>
            <div className={"nav-menu"}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
            </div>
        </nav>
    );
};

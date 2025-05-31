import {FC, useState} from "react";
import "../css/Navigation.css"
import {NavLink} from "react-router-dom";


export const Navigation: FC = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("nav-menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("nav-menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("nav-menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header>
            <nav className={"navbar section-content"}>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <NavLink to={"/"} className={"nav-logo"}>
                    <h2 className={"logo-text"}>Grace to Gold</h2>
                </NavLink>
                <ul className={menu_class}>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/"}>Home</NavLink>
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

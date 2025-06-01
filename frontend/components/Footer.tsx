import { FC } from "react";
import "../css/Footer.css"
import {NavLink} from "react-router-dom";

export const Footer: FC = () => {
    return (
        <footer className={"footer-section"}>
            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
            <p>
                <NavLink className={"footer-link"} to={""} >Privacy Policy</NavLink> |{" "}
                <NavLink className={"footer-link"} to={""} >Terms of Service</NavLink> |{" "}
                <NavLink className={"footer-link"} to={""} >Contact Us</NavLink>
            </p>
        </footer>
    );
};
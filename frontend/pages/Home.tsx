import {FC} from "react";
import "../css/Home.css";
import "../css/About.css";
import {Convertor} from "../convertor/Convertor.tsx";
import {NavLink} from "react-router-dom";

export const Home: FC = () => {
    return (
        <>
            <section className={"hero-section"}>
                <div className={"section-content"}>
                    <div className={"hero-details"}>
                        <h2 className={"title"}>Grace to Gold</h2>
                        <h3 className={"subtitle"}>No Money? No Maidens.</h3>
                        <p className={"description"}>Wield the power of real-time currency conversion like a true Tarnished. Fair rates, fast swaps, and zero hidden fees — because even heroes need coin to conquer kingdoms.</p>
                        <div className={"buttons"}>
                            <NavLink className={"button login-now"} to={"/login"}>Login</NavLink>
                            <NavLink className={"button contact-us"} to={"/contact"}>Contact us</NavLink>
                        </div>
                    </div>
                    <div className={"hero-convertor-wrapper"}>
                        <Convertor from={"EUR - Euro (€)"} into={"INR - Indian Rupee (₹)"} amount={1} />
                    </div>
                </div>
            </section>

            <section className={"about-section"}>
                <div className={"section-content"}>
                    <div className={"about-image-wrapper"}>
                        <img src={"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} className={"about-image"}/>
                    </div>
                    <div className={"about-details"}>
                        <h2 className={"section-title"}>About Us</h2>
                        <p className={"text"}>Welcome, Tarnished. You’ve found the one true portal between realms — of currency.
                            In a world where runes hold power and grace guides your path, Grace to Gold was forged to bring clarity and control to your financial journey. Whether you hail from Limgrave or Leyndell (or London or Tokyo), we believe that exchanging currency shouldn’t be a boss fight.
                            Our mission is to provide a fast, transparent, and immersive way to convert money across the real-world economies — while honoring the spirit of the Lands Between.</p>
                    </div>
                </div>
            </section>
        </>

    )
}
import {FC} from "react";
import "../css/Home.css";
import {Convertor} from "../convertor/Convertor.tsx";
import {NavLink} from "react-router-dom";

export const Home: FC = () => {
    return (
        <>
{/*            <section className={"main-section"}>
                <div className={"main-header-container"}>
                    <h1 className={"main-header"}>Grace to Gold <span className={"secondary-header"}>No Money? No Maidens.</span></h1>
                    <p className={"main-header-text"}>Wield the power of real-time currency conversion like a true Tarnished. Fair rates, fast swaps, and zero hidden fees — because even heroes need coin to conquer kingdoms.</p>
                </div>

                    <div className={"main-header-convertor"}>
                    <div className={"main-convertor"}>
                        <Convertor from={"EUR - Euro (€)"} into={"INR - Indian Rupee (₹)"} amount={1} />
                    </div>
                </div>
            </section>*/}

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
        </>

    )
}
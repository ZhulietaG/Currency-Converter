import {FC} from "react";
import "./Home.css";
import {Convertor} from "../convertor/Convertor.tsx";

export const Home: FC = () => {
    return (
        <>
            <section className={"main-section"}>
                <div className={"main-header-container"}>
                    <h1 className={"main-header"}>Grace to Gold <span className={"secondary-header"}>No Money? No Maidens.</span></h1>
                    <p className={"main-header-text"}>Wield the power of real-time currency conversion like a true Tarnished. Fair rates, fast swaps, and zero hidden fees — because even heroes need coin to conquer kingdoms.</p>
                </div>
                <div className={"main-convertor"}>
                    <Convertor />
                </div>
            </section>
        </>

    )
}
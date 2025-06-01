import {FC} from "react";
import "../css/Contact.css";
import {Button} from "../components";

export const Contact: FC = () => {
    return (
        <section className={"contact-section"}>
            <h2 className={"contact-title"}>Contact us</h2>
            <div className={"contact-content"}>
                    <ul className={"contact-info-list"}>
                        <li className={"contact-info"}>
                            <p>Email address: support@currencyconv.com)</p>
                        </li>
                        <li className={"contact-info"}>
                            <p>Phone number:  +1 800 123 4567</p>
                        </li>
                        <li className={"contact-info"}>
                            <p>Open Mon-Fri:  9:00AM - 5:00 PM</p>
                        </li>
                        <li className={"contact-info"}>
                            <p>Closed on Saturday and Sunday</p>
                        </li>
                    </ul>
                <div className={"contact-wrapper"}>
                    <form className={"contact-form"}>
                        <input className={"contact-input"} required={true}  type={"email"} placeholder={"Email address"}/>
                        <textarea className={"contact-text"} required={true} placeholder={"Your message"}/>
                        <Button text={"Login"} onClick={console.log}></Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
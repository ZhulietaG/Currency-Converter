import { FC } from "react";
import "../css/Button.css"

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, onClick}) => {

    return (
        <button className={"button-action"} onClick={onClick}>
            {text}
        </button>
    );
};

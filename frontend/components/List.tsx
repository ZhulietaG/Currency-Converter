import {ReactNode} from "react";
import "../css/UserCard.css"

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export const List = <T,>({ items, renderItem }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li className={"user-card"} key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};
export const ListWallet = <T,>({ items, renderItem }: ListProps<T>) => {
    return (
        <ul className={"wallet-container"}>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};

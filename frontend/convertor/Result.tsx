import {FC} from 'react'
import {Loading} from "./Loading";

interface ResultProps {
    loading: boolean;
    result: number;
    rate: number;
    into: string;
    from: string;
    amount: number;
    update: string;
}


export const Result: FC<ResultProps> = ({ loading, result, rate, into, from, amount, update }: ResultProps) => {

    const fromFiled = from.split(" ")[0].trim().toUpperCase()
    const intoFiled = into.split(" ")[0].trim().toUpperCase()

    return (
        <>
            {loading ? (<Loading/>) : (
                !isNaN(result) &&
                    !isNaN(rate) && (
                        <>
                            <p className={"currency-value"}>
                                {amount} {fromFiled}
                                <span className={`currency-flag currency-flag-sm currency-flag-${from.toLowerCase()}`}></span>
                            </p>
                            <p className={"currency-result"}>
                                {result} ({intoFiled.toUpperCase()}) {" "}
                                <span className={`currency-flag currency-flag-lg currency-flag-${intoFiled.toLowerCase()}`}></span>
                            </p>
                            <p className={"currency-rate"}>
                                Rate={rate}{" "}
                                <span className={`currency-flag currency-flag-sm currency-flag-${intoFiled.toLowerCase()}`}></span>
                                <span className={"currency-update"}>Last updated on: {update}</span>
                            </p>
                        </>
                )
            )}
        </>
    )
}
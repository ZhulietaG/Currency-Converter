import {FC} from 'react'

export const Loading: FC = () => {
    return (
        <>
            <div className="loading">
                <div className="loadings">
                    <div className="line hw1"></div>
                    <div className="line hm2"></div>
                    <div className="line hw3"></div>
                    <div className="line hw4"></div>
                </div>
            </div>
        </>
    )
}
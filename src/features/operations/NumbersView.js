import React from "react";

export default function NumbersView(props) {
    const {numbers, currentNumber, operationSign} = props;
    const showNumbers = () => {
        if (numbers.length === 0) {
            return null;
        }

        return (
            numbers.map((n) => {
                return (<p>{n} {operationSign ? operationSign : ","}</p>);
            })
        );
    }

    return (
        <React.Fragment>
            <p>Numbers:</p>
            {showNumbers()}
            <p>{currentNumber.join("")}</p>
        </React.Fragment>
    );
}
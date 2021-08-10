import React, { useState } from "react";
import PropTypes from "prop-types";
import materialUiStyles from "../../app/styles";
import { 
    Divider,
    Paper,
    Typography 
} from "@material-ui/core";
import DigitsView from "./DigitsView";
import ControlForm from "./ControlForm";
import NumbersView from "./NumbersView";

// NumberComponent
//
// numbers = []
// [9, 8, 7]
// [6, 5, 4]
// [3, 2, 1]
// [ del , 0, -]
// [button (clear)][button (ADD)]

export function AdditionComponent(props) {
    return (
        <React.Fragment>
            <NumberComponent operationSign="+" 
                             serviceType={props.serviceType}/>
        </React.Fragment>
    );
}

export function SubstractionComponent(props) {
    return (
        <React.Fragment>
            <NumberComponent operationSign="-" 
                             serviceType={props.serviceType}/>
        </React.Fragment>
    );
}

export function MultiplicationComponent(props) {
    return (
        <React.Fragment>
            <NumberComponent operationSign="*" 
                             serviceType={props.serviceType}/>
        </React.Fragment>
    );
}

export function DivisionComponent(props) {
    return (
        <React.Fragment>
            <NumberComponent operationSign="/" 
                             serviceType={props.serviceType}/>
        </React.Fragment>
    );
}

export function SquareRootComponent(props) {
    return (
        <React.Fragment>
            <NumberComponent operationSign="√"
                             singleNumber={true}
                             serviceType={props.serviceType}/>
        </React.Fragment>
    );
}


export default function NumberComponent(props) {
    const classes = materialUiStyles();
    const { serviceType, operationSign } = props;
    const [numbers, setNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState([0]);
    const [negative, setNegative] = useState(false);
    const [singleNumber] = useState(props.singleNumber ? props.singleNumber : false);

    const handleDigit = (e) => {
        const currentValue = currentNumberValue();
        const value = e.target.innerText;

        if (currentValue === 0) {
            setCurrentNumber([parseInt(value)]);
        } else {
            setCurrentNumber([...currentNumber, parseInt(value)]);
        }
    }

    const clearCurrentNumber = () => {
        setCurrentNumber([0]);
        setNegative(false);
    }

    const handleClearButton = (e) => {
        setNumbers([]);
        clearCurrentNumber();
    }

    const handleDeleteButton = (e) => {
        let values = currentNumber;
        values.pop();
        if (values.length === 0 || (values.length === 1 && values[0] === "-")) {
            clearCurrentNumber();
        } else {
            setCurrentNumber([...values]);
        }
    }

    const handleMinusButton = (e) => {
        const currentValue = currentNumberValue();
        if (currentValue === 0) {
            clearCurrentNumber();
            return;
        }
        
        let values = currentNumber;
        if (negative) {
            values.shift();
        } else {
            values.unshift("-");
        }
        setCurrentNumber([...values]);
        setNegative(!negative);
    }

    const disableEnter = singleNumber
        ? numbers.length === 1
        : currentNumberValue() === 0;

    const handleEnterButton = (e) => {
        const newNumber = currentNumberValue();
        if (newNumber === 0) {
            clearCurrentNumber();
            return;
        }
        setNumbers([...numbers, newNumber]);
        clearCurrentNumber();
    }

    const currentNumberValue = () => {
        return parseInt(currentNumber.join(""));
    }

    const handleSubmitButton = () => {
        const currentValue = currentNumberValue();
        const actualNumbers = [...numbers, currentValue];
        let body;
        if (singleNumber) {
            body = {
                serviceType,
                number: numbers[0]
            }
        } else {
            body = {
                serviceType,
                numbers: actualNumbers
            }
        }
        console.log("call api", body);
        // wait for result
        // property to LOAD result?
    }

    const disableSubmit = singleNumber
        ? numbers.length < 1
        : numbers.length <= 1;

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5" align="center">
                    {serviceType}
                </Typography>
                <Divider />
                <NumbersView operationSign={operationSign}
                             numbers={numbers}
                             currentNumber={currentNumber} />
                <Divider />
                <DigitsView classes={classes}
                            onDigitClick={handleDigit}
                            onDeleteClick={handleDeleteButton}
                            onMinusClick={handleMinusButton}
                            onClearClick={handleClearButton}
                />
                <ControlForm onClearClick={handleClearButton}
                            disableEnter={disableEnter}
                            onEnterClick={handleEnterButton}
                            disableSumit={disableSubmit}
                            onSubmitClick={handleSubmitButton}
                />
            </Paper>
        </main>
    );
}

NumberComponent.propTypes = {
    serviceType: PropTypes.string.isRequired,
}
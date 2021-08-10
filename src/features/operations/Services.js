import { FormControl, InputLabel, makeStyles, MenuItem, Select, Divider, Popover, Typography } from "@material-ui/core";
import React, { useState } from "react";

import AuthComponent from "../auth/AuthComponent";
import FreeFormComponent from "./FreeFormComponent";
import { 
    AdditionComponent,
    DivisionComponent,
    MultiplicationComponent,
    SquareRootComponent,
    SubstractionComponent
} from "./NumberComponent";
import RandomStringComponent from "./RandomStringComponent";
import ResultView from "./ResultView";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    errorTypography: {
        padding: theme.spacing(2),
    }
}));

const componentToOperationType = {
    "ADDITION": AdditionComponent,
    "SUBTRACTION": SubstractionComponent,
    "DIVISION": DivisionComponent,
    "MULTIPLICATION": MultiplicationComponent,
    "FREE_FORM": FreeFormComponent,
    "SQUARE_ROOT": SquareRootComponent,
    "RANDOM_STRING": RandomStringComponent//
}

function ServicesComponent() {
    const classes = useStyles();

    const [selectedValue, setSelectedValue] = useState('');
    const [result, setResult] = useState(null);
    const [errorResult, setErrorResult] = useState(null);
    const [showError, setShowError] = useState(false);
    const [errorElement, setErrorElement] = useState(null);

    const handleChange = (e) => {
        setResult(null);
        setSelectedValue(e.target.value);
    }

    const handleSubmit = (e, response) => {
        if (response.status !== 200) {
            setErrorResult(response.data);
            setErrorElement(e.target);
            setShowError(true);
        } else {
            setShowError(false);
            setResult(response.data);
        }
    }

    const handleCloseError = () => {
        setShowError(false);
        setErrorElement(null);
    }

    const renderComponent = () => {
        if (result) {
            return (<ResultView result={result} />);
        }

        const element = componentToOperationType[selectedValue];
        if (element) {
            return React.createElement(element, {
                serviceType: selectedValue,
                onSubmitHandle: handleSubmit,
            });
        }
        return null;
    }

    return (
        <main>
            <FormControl className={classes.formControl}>
                <InputLabel id="service-select-label">Select a Service</InputLabel>
                <Select
                    labelId="service-select-label"
                    id="service-select"
                    value={selectedValue}
                    onChange={handleChange}
                >
                    {/* TODO this should come from backend? */}
                    <MenuItem value={"ADDITION"}>Addition</MenuItem>
                    <MenuItem value={"SUBSTRACTION"}>Substraction</MenuItem>
                    <MenuItem value={"MULTIPLICATION"}>Multiplication</MenuItem>
                    <MenuItem value={"SQUARE_ROOT"}>Square Root</MenuItem>
                    <MenuItem value={"FREE_FORM"}>Free Form</MenuItem>
                    <MenuItem value={"RANDOM_STRING"}>Random</MenuItem>
                </Select>
            </FormControl>
            <Divider />
            {renderComponent()}
            <div>
                <Popover
                    open={showError}
                    anchorEl={errorElement}
                    onClose={handleCloseError}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>{errorResult ? errorResult.message : "Error"}</Typography>
                </Popover>
            </div>
        </main>
    );
}

export function Services() {
    return (
        <AuthComponent>
            <ServicesComponent />
        </AuthComponent>
    );
}
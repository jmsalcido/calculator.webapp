import { FormControl, InputLabel, makeStyles, MenuItem, Select, Divider } from "@material-ui/core";
import React, { useState } from "react";

import AuthComponent from "../auth/AuthComponent";
import { 
    AdditionComponent,
    DivisionComponent,
    MultiplicationComponent,
    SquareRootComponent,
    SubstractionComponent
} from "./NumberComponent";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const componentToOperationType = {
    "ADDITION": AdditionComponent,
    "SUBSTRACTION": SubstractionComponent,
    "DIVISION": DivisionComponent,
    "MULTIPLICATION": MultiplicationComponent,
    "FREE_FORM": null, //FreeFormComponent,
    "SQUARE_ROOT": SquareRootComponent, //SquareRootComponent,
    "RANDOM_STRING": null//
}

function ServicesComponent() {
    const classes = useStyles();

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setSelectedValue(e.target.value);
    }

    const renderComponent = () => {
        const element = componentToOperationType[selectedValue];
        if (element) {
            return React.createElement(element, {
                serviceType: selectedValue
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
                    {/* item per service */}
                    <MenuItem value={"ADDITION"}>Addition</MenuItem>
                    <MenuItem value={"SUBSTRACTION"}>Substraction</MenuItem>
                    <MenuItem value={"MULTIPLICATION"}>Multi</MenuItem>
                    <MenuItem value={"SQUARE_ROOT"}>Foo...</MenuItem>
                </Select>
            </FormControl>
            <Divider />
            {renderComponent()}
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
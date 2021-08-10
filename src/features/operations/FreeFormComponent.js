import { Button, Divider, Input, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import materialUiStyles from "../../app/styles";
import { submitOperation } from "./operationsAPI";

export default function FreeFormComponent(props) {
    const classes = materialUiStyles();
    const { serviceType, onSubmitHandle } = props;
    const [freeFormText, setFreeFormText] = useState("");

    async function submit(e, body) {
        const answer = await submitOperation(body);
        onSubmitHandle(e, answer);
    }

    const handleSubmitButton = (e) => {
        const body = {
            serviceType,
            freeForm: freeFormText,
        }

        submit(e, body);
    }

    const handleChange = (e) => {
        const value = e.target.value;

        // verify that the first char is a number...
        if (value && !/^[0-9]/.test(value)) {
            return;
        }

        // I am pretty sure that this can be handled by a regex
        if (value.length > 1) {
            const arr = value.slice(-2).split("");
            const operators = ["*", "-", "+", "/"];
            if (operators.includes(arr[0]) && operators.includes(arr[1])) {
                return;
            }
        }

        // only accept + / - * and numbers and spaces.
        setFreeFormText(e.target.value.replace(/[^0-9\+\-\*\/]/g,""));
    }

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5" align="center">
                    {serviceType}
                </Typography>
                <Divider />
                <Input value={freeFormText} onChange={handleChange} />
                <Divider />
                <Button color="primary" aria-label="clear" onClick={handleSubmitButton}>
                    Submit
                </Button>
            </Paper>
        </main>
    );
}
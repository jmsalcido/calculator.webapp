import { Button, Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
import materialUiStyles from "../../app/styles";
import { submitOperation } from "./operationsAPI";

export default function RandomStringComponent(props) {
    const classes = materialUiStyles();
    const { serviceType, onSubmitHandle } = props;

    async function submit(e, body) {
        const answer = await submitOperation(body);
        onSubmitHandle(e, answer);
    }

    const handleSubmitButton = (e) => {
        const body = {
            serviceType
        }

        submit(e, body);
    }

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5" align="center">
                    {serviceType}
                </Typography>
                <Divider />
                <Button color="primary" aria-label="clear" onClick={handleSubmitButton}>
                    Submit
                </Button>
            </Paper>
        </main>
    );
}
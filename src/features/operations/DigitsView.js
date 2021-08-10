import { Button, Grid } from "@material-ui/core";
import BackspaceIcon from '@material-ui/icons/Backspace';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import React from "react";

function FormRow(props) {
    const {numbers, onDigitClick, onDeleteClick, onMinusClick} = props;
    const row = numbers.map((value => {
        let clickHandle = onDigitClick;

        if (value === "-") {
            clickHandle = onMinusClick;
            value = (<ExposureNeg1Icon />)
        }

        if (value === "delete") {
            clickHandle = onDeleteClick;
            value = (<BackspaceIcon />);
        }

        return (
            <Button color="primary" aria-label="add" onClick={clickHandle}>
                {value}
            </Button>
        )
    }));
    return (
        <React.Fragment>
            <Grid item xs={2}>
                {row[0]}
            </Grid>
            <Grid item xs={2}>
                {row[1]}
            </Grid>
            <Grid item xs={2}>
                {row[2]}
            </Grid>
        </React.Fragment>
    );
}

export default function DigitsView(props) {
    const {classes, onDigitClick, onDeleteClick, onMinusClick} = props;
    return (
        <Grid container justifyContent="center" spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow classes={classes}
                             numbers={[9,8,7]}
                             onDigitClick={onDigitClick} />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow classes={classes}
                             numbers={[6,5,4]}
                             onDigitClick={onDigitClick} />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow classes={classes}
                             numbers={[3,2,1]}
                             onDigitClick={onDigitClick} />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow classes={classes}
                             numbers={["delete",0,"-"]}
                             onDigitClick={onDigitClick}
                             onDeleteClick={onDeleteClick}
                             onMinusClick={onMinusClick} />
                </Grid>
            </Grid>
    );
}
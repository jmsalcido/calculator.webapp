import { Button, Grid } from "@material-ui/core";
import React from 'react';

export default function ControlForm(props) {
    const { 
        onClearClick,
        onEnterClick,
        disableEnter,
        onSubmitClick,
        disableSumit,
     } = props;
    return (
        <Grid container justifyContent="center" spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={2}>
                    <Button color="primary" aria-label="clear" onClick={onClearClick}>
                        CLEAR
                    </Button>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                    <Button disabled={disableEnter}
                            color="primary"
                            aria-label="enter"
                            onClick={onEnterClick}>
                        ENTER
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                        <Button color="primary"
                                disabled={disableSumit}
                                aria-label="clear" 
                                onClick={onSubmitClick}>
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
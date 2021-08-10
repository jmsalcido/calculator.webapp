import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import React from 'react';
import materialUiStyles from '../../app/styles';

export default function ResultView(props) {
    const classes = materialUiStyles();
    const { result } = props;

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5" align="center">
                    Result for {result.serviceType}
                </Typography>
                <List>
                    <ListItem button>
                        <ListItemText primary="Result" secondary={result.resultString} />
                    </ListItem>
                    <Divider />
                </List>
            </Paper>
        </main>
    );
}
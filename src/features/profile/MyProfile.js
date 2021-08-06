import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import materialUiStyles from "../../app/styles";
import AuthComponent from "../auth/AuthComponent";
import { selectUser } from "../auth/authSlice";

function MyProfileComponent(props) {
    const user = useSelector(selectUser);
    const classes = materialUiStyles();

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Profile
                </Typography>
                <p>Username:</p>
                <p>{user.username}</p>
                <p>Roles:</p>
                <p>{user.roles}</p>
        </Paper>
        </main>
    );
}

export default function MyProfile(props) {

    return (
        <AuthComponent>
            <MyProfileComponent />
        </AuthComponent>
    );
}

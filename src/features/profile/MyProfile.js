import { Divider, List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import materialUiStyles from "../../app/styles";
import AuthComponent from "../auth/AuthComponent";
import { getProfile } from "./profileAPI";


function ProfileData(props) {
    const { profile } = props;

    let component = (<div>fetching...</div>);
    if (profile) {
        component = (
        <List>
            <ListItem button>
                <ListItemText primary="Id" secondary={profile.id} />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Username" secondary={profile.username} />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="UUID" secondary={profile.uuid} />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Status" secondary={profile.status} />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="User Balance" secondary={profile.userBalance} />
            </ListItem>
        </List>
        ) 
    }

    return (
        <React.Fragment>
            {component}
        </React.Fragment>
    );
}

function MyProfileComponent(props) {
    const classes = materialUiStyles();
    const [profile, setProfile] = useState(null);

    async function fetchData() {
        const answer = await getProfile();
        setProfile(answer);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Profile
                </Typography>
                <ProfileData profile={profile} />
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

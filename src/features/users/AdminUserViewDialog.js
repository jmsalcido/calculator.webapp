import React from "react";
import PropTypes from "prop-types";

import { 
    AppBar,
    Button,
    IconButton,
    Divider,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

export default function AdminUserViewDialog(props) {
    const { classes, onEnterEdit, onCloseDialog, userSelected } = props;

    return (
        <React.Fragment>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={onCloseDialog} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    User #{userSelected.id}
                </Typography>
                <Button autoFocus color="inherit" onClick={onEnterEdit}>
                    Edit
                </Button>
            </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <ListItemText primary="ID" secondary={userSelected.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Username" secondary={userSelected.username} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="UUID" secondary={userSelected.uuid} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Role" secondary={userSelected.role} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Status" secondary={userSelected.status} />
                </ListItem>
            </List>
        </React.Fragment>
    );
}

AdminUserViewDialog.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    userSelected: PropTypes.object,
}
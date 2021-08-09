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

export default function AdminRecordViewDialog(props) {
    const { classes, onEnterEdit, onCloseDialog, recordSelected } = props;

    return (
        <React.Fragment>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={onCloseDialog} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Record #{recordSelected.id}
                </Typography>
                <Button autoFocus color="inherit" onClick={onEnterEdit}>
                    Edit
                </Button>
            </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <ListItemText primary="ID" secondary={recordSelected.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="UUID" secondary={recordSelected.uuid} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Service Type" secondary={recordSelected.service.type} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Username" secondary={recordSelected.user.username} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Cost" secondary={recordSelected.cost} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="User Balance" secondary={recordSelected.userBalance} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Date" secondary={recordSelected.date} />
                </ListItem>
            </List>
        </React.Fragment>
    );
}

AdminRecordViewDialog.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    serviceSelected: PropTypes.object,
}
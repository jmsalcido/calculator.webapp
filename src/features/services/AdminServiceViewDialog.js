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

export default function AdminServiceViewDialog(props) {
    const { classes, onEnterEdit, onCloseDialog, serviceSelected } = props;

    return (
        <React.Fragment>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={onCloseDialog} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Service #{serviceSelected.id}
                </Typography>
                <Button autoFocus color="inherit" onClick={onEnterEdit}>
                    Edit
                </Button>
            </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <ListItemText primary="ID" secondary={serviceSelected.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="UUID" secondary={serviceSelected.uuid} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Service Type" secondary={serviceSelected.type} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Cost" secondary={serviceSelected.cost} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Status" secondary={serviceSelected.status} />
                </ListItem>
            </List>
        </React.Fragment>
    );
}

AdminServiceViewDialog.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    serviceSelected: PropTypes.object,
}
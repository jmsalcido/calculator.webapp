import React, { useState } from "react";
import PropTypes from "prop-types";

import { 
    AppBar,
    Button,
    Divider,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Typography,
    Input,
    FormControl,
    InputLabel,
} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteModal from "../modals/DeleteModal";

export default function AdminUserEditDialog(props) {
    const { classes, userSelected, onDismissEdit, onDelete } = props;

    const [username, setUsername] = useState(userSelected.username);
    const [uuid, setUuid] = useState(userSelected.uuid);
    const [role, setRole] = useState(userSelected.role);
    const [status, setStatus] = useState(userSelected.status);

    const onSaveClick = () => {
        const editedUser = {
            id: userSelected.id,
            username,
            uuid,
            role,
            status
        }

        if (props.onSaveClick) {
            props.onSaveClick(editedUser);
        }
    }

    const [alertOpen, setAlertOpen] = useState(false);

    const onAlertDismiss = () => {
        setAlertOpen(false);
    }

    const onDeleteAgree = () => {
        setAlertOpen(false);
        console.log("delete", userSelected);
        onDelete();
    }

    const onDeleteIconClick = () => {
        setAlertOpen(true);
    }

    return (
        <React.Fragment>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <CreateIcon />
                <Typography variant="h6" className={classes.title}>
                    Edit User
                </Typography>
                <Button autoFocus color="inherit" onClick={onSaveClick}>
                    <SaveIcon />
                </Button>
                <Button autoFocus color="inherit" onClick={onDeleteIconClick}>
                    <DeleteIcon />
                </Button>
                <Button autoFocus color="inherit" onClick={onDismissEdit}>
                    <ExitToAppIcon />
                </Button>
            </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <ListItemText primary="ID" secondary={userSelected.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <FormControl fullWidth>
                        <InputLabel>Username</InputLabel>
                        <Input autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            defaultValue={userSelected.username}
                            onChange={(e) => {setUsername(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem button>
                    <FormControl fullWidth>
                        <InputLabel>UUID</InputLabel>
                        <Input
                            margin="dense"
                            id="uuid"
                            label="UUID"
                            type="text"
                            defaultValue={userSelected.uuid}
                            onChange={(e) => {setUuid(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem button>
                    {/* TODO this can be a select input from 2 values. */}
                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Input
                            margin="dense"
                            id="role"
                            label="Role"
                            type="text"
                            defaultValue={userSelected.role}
                            onChange={(e) => {setRole(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem button>
                    {/* TODO this can be a select input from the values. */}
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Input
                            margin="dense"
                            id="status"
                            label="Status"
                            type="text"
                            defaultValue={userSelected.status}
                            onChange={(e) => {setStatus(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
            </List>
            <DeleteModal open={alertOpen} 
                         handleClose={onAlertDismiss}
                         handleAgree={onDeleteAgree}
            />
        </React.Fragment>
    );
}

AdminUserEditDialog.propTypes = {
    onDismissEdit: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    userSelected: PropTypes.object,
    onDelete: PropTypes.func,
}
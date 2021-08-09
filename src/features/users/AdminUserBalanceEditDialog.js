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

export default function AdminUserBalanceEditDialog(props) {
    const { classes, userSelected, onDismissEdit, onDelete } = props;

    const [username] = useState(userSelected.username);
    const [uuid] = useState(userSelected.uuid);
    const [role] = useState(userSelected.role);
    const [userBalance, setUserBalance] = useState(userSelected.userBalance);

    const onSaveClick = () => {
        const editedUser = {
            id: userSelected.id,
            username,
            uuid,
            role,
            userBalance: parseInt(userBalance),
            status: userSelected.status,
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
                    <FormControl fullWidth>
                        <InputLabel>User Balance</InputLabel>
                        <Input
                            margin="dense"
                            id="status"
                            label="User Balance"
                            type="number"
                            defaultValue={userSelected.userBalance}
                            onChange={(e) => {setUserBalance(e.target.value)}}
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

AdminUserBalanceEditDialog.propTypes = {
    onDismissEdit: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    userSelected: PropTypes.object,
    onDelete: PropTypes.func,
}
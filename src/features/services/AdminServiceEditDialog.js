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

export default function AdminServiceEditDialog(props) {
    const { classes, serviceSelected, onDismissEdit, onDelete } = props;

    const [serviceType, setServiceType] = useState(serviceSelected.type);
    const [uuid, setUuid] = useState(serviceSelected.uuid);
    const [cost, setCost] = useState(serviceSelected.cost);
    const [status, setStatus] = useState(serviceSelected.status);

    const onSaveClick = () => {
        const editedService = {
            id: serviceSelected.id,
            type: serviceType,
            uuid,
            cost,
            status,
        }

        if (props.onSaveClick) {
            props.onSaveClick(editedService);
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
                    <ListItemText primary="ID" secondary={serviceSelected.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <FormControl fullWidth>
                        <InputLabel>Service Type</InputLabel>
                        <Input autoFocus
                            margin="dense"
                            id="type"
                            label="Service Type"
                            type="text"
                            defaultValue={serviceSelected.type}
                            onChange={(e) => {setServiceType(e.target.value)}}
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
                            defaultValue={serviceSelected.uuid}
                            onChange={(e) => {setUuid(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem button>
                    <FormControl fullWidth>
                        <InputLabel>Cost</InputLabel>
                        <Input
                            margin="dense"
                            id="cost"
                            label="Cost"
                            type="number"
                            defaultValue={serviceSelected.cost}
                            onChange={(e) => {setCost(e.target.value)}}
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
                            defaultValue={serviceSelected.status}
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

AdminServiceEditDialog.propTypes = {
    onDismissEdit: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    userSelected: PropTypes.object,
    onDelete: PropTypes.func,
}
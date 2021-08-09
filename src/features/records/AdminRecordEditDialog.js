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

export default function AdminRecordEditDialog(props) {
    const { classes, recordSelected, onDismissEdit, onDelete } = props;

    const [uuid, setUuid] = useState(recordSelected.uuid);
    const [cost, setCost] = useState(recordSelected.cost);
    const [userBalance, setUserBalance] = useState(recordSelected.userBalance);
    const [serviceResponse, setServiceResponse] = useState(recordSelected.serviceResponse);
    const [date, setDate] = useState(recordSelected.date);

    const onSaveClick = () => {
        const editedRecord = {
            id: recordSelected.id,
            uuid,
            cost,
            date,
            serviceResponse,
            userBalance,
            serviceId: recordSelected.service.id,
            service: recordSelected.service,
            user: recordSelected.user,
            userId: recordSelected.user.id,
        }

        if (props.onSaveClick) {
            props.onSaveClick(editedRecord);
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
                    Edit Record
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
                    <ListItemText primary="ID" secondary={recordSelected.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="User Id" secondary={recordSelected.user.id} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Service Id" secondary={recordSelected.service.id} />
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
                            defaultValue={recordSelected.uuid}
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
                            defaultValue={recordSelected.cost}
                            onChange={(e) => {setCost(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
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
                            defaultValue={recordSelected.userBalance}
                            onChange={(e) => {setUserBalance(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem button>
                    <FormControl fullWidth>
                        <InputLabel>Service Response</InputLabel>
                        <Input
                            margin="dense"
                            id="status"
                            label="Service Response"
                            type="text"
                            defaultValue={recordSelected.serviceResponse}
                            onChange={(e) => {setServiceResponse(e.target.value)}}
                            fullWidth
                        />
                    </FormControl>
                </ListItem>
                <Divider />
                <ListItem button>
                    <FormControl fullWidth>
                        <InputLabel>Date</InputLabel>
                        <Input
                            margin="dense"
                            id="status"
                            label="Date"
                            type="text"
                            defaultValue={recordSelected.date}
                            onChange={(e) => {setDate(e.target.value)}}
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

AdminRecordEditDialog.propTypes = {
    onDismissEdit: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    userSelected: PropTypes.object,
    onDelete: PropTypes.func,
}
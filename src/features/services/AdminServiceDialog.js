import React, { useState } from "react";
import PropTypes from "prop-types";

import { Dialog, makeStyles, Slide } from "@material-ui/core";
import { deleteService, updateService } from "./servicesAPI";
import AdminServiceViewDialog from "./AdminServiceViewDialog";
import AdminServiceEditDialog from "./AdminServiceEditDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

export default function AdminServiceDialog(props) {
    const classes = useStyles();
    const open = props.dialogOpen;
    const [isViewMode, setIsViewMode] = useState(true);

    const serviceSelected = props.serviceSelected;
    const onCloseDialog = props.onCloseDialog;

    const onDismissEdit = () => {
        setIsViewMode(true);
    }

    const onEnterEdit = () => {
        setIsViewMode(false);
    }

    async function saveService(updatedService) {
        const answer = await updateService(updatedService);
        return answer;
    }

    const onSaveClick = (editedService) => {
        saveService(editedService);
        setIsViewMode(true);
        onCloseDialog(editedService);
    }

    async function deleteFromServices(serviceId){
        const answer = await deleteService(serviceId);
        return answer;
    }

    const onDelete = () => {
        deleteFromServices(serviceSelected.id);
        setIsViewMode(true);
        onCloseDialog(serviceSelected, true);
    }

    const dialog = () => {
        if (isViewMode) {
            return (
                <AdminServiceViewDialog
                    onEnterEdit={onEnterEdit}
                    classes={classes}
                    onCloseDialog={onCloseDialog}
                    serviceSelected={serviceSelected}
                    />
            );
        }

        return (
        <AdminServiceEditDialog 
            onDismissEdit={onDismissEdit}
            classes={classes}
            onSaveClick={onSaveClick}
            onDelete={onDelete}
            serviceSelected={serviceSelected}
            />
        );
    }

    return (
        <Dialog fullScreen open={open} onClose={onCloseDialog} TransitionComponent={Transition}>
            {dialog()}
        </Dialog>
    );
}

AdminServiceDialog.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
    serviceSelected: PropTypes.object,
}
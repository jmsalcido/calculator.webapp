import React, { useState } from "react";
import PropTypes from "prop-types";

import { Dialog, makeStyles, Slide } from "@material-ui/core";
import AdminRecordViewDialog from "./AdminRecordViewDialog";
import AdminRecordEditDialog from "./AdminRecordEditDialog";

import { deleteRecord, updateRecord } from "./recordsAPI";

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

export default function AdminRecordDialog(props) {
    const classes = useStyles();
    const open = props.dialogOpen;
    const [isViewMode, setIsViewMode] = useState(true);

    const recordSelected = props.recordSelected;
    const onCloseDialog = props.onCloseDialog;

    const onDismissEdit = () => {
        setIsViewMode(true);
    }

    const onEnterEdit = () => {
        setIsViewMode(false);
    }

    async function saveRecord(updatedRecord) {
        const answer = await updateRecord(updatedRecord);
        return answer;
    }

    const onSaveClick = (updatedRecord) => {
        saveRecord(updatedRecord);
        setIsViewMode(true);
        onCloseDialog(updatedRecord);
    }

    async function deleteFromRecords(recordId){
        const answer = await deleteRecord(recordId);
        return answer;
    }

    const onDelete = () => {
        deleteFromRecords(recordSelected.id);
        setIsViewMode(true);
        onCloseDialog(recordSelected, true);
    }

    const dialog = () => {
        if (isViewMode) {
            return (
                <AdminRecordViewDialog
                    onEnterEdit={onEnterEdit}
                    classes={classes}
                    onCloseDialog={onCloseDialog}
                    recordSelected={recordSelected}
                    />
            );
        }

        return (
        <AdminRecordEditDialog 
            onDismissEdit={onDismissEdit}
            classes={classes}
            onSaveClick={onSaveClick}
            onDelete={onDelete}
            recordSelected={recordSelected}
            />
        );
    }

    return (
        <Dialog fullScreen open={open} onClose={onCloseDialog} TransitionComponent={Transition}>
            {dialog()}
        </Dialog>
    );
}

AdminRecordDialog.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
    recordSelected: PropTypes.object,
}
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Dialog, makeStyles, Slide } from "@material-ui/core";
import { deleteUser, updateUser } from "./usersAPI";

import AdminUserBalanceEditDialog from "./AdminUserBalanceEditDialog";
import AdminUserBalanceViewDialog from "./AdminUserBalanceViewDialog";

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

export default function AdminUserBalanceDialog(props) {
    const classes = useStyles();
    const open = props.dialogOpen;
    const [isViewMode, setIsViewMode] = useState(true);

    useEffect(() => {

    });

    const userSelected = props.userSelected;
    const onCloseDialog = props.onCloseDialog;

    const onDismissEdit = () => {
        setIsViewMode(true);
    }

    const onEnterEdit = () => {
        setIsViewMode(false);
    }

    async function saveUser(updatedUser) {
        const answer = await updateUser(updatedUser);
        return answer;
    }

    const onSaveClick = (editedUser) => {
        saveUser(editedUser);
        setIsViewMode(true);
        onCloseDialog(editedUser);
    }

    async function deleteFromUsers(userId){
        const answer = await deleteUser(userId);
        return answer;
    }

    const onDelete = () => {
        deleteFromUsers(userSelected.id);
        setIsViewMode(true);
        onCloseDialog(userSelected, true);
    }

    const dialog = () => {
        if (isViewMode) {
            return (
                <AdminUserBalanceViewDialog
                    onEnterEdit={onEnterEdit}
                    classes={classes}
                    onCloseDialog={onCloseDialog}
                    userSelected={userSelected}
                    />
            );
        }

        return (
        <AdminUserBalanceEditDialog
            onDismissEdit={onDismissEdit}
            classes={classes}
            onSaveClick={onSaveClick}
            onDelete={onDelete}
            userSelected={userSelected}
            />
        );
    }

    return (
        <Dialog fullScreen open={open} onClose={onCloseDialog} TransitionComponent={Transition}>
            {dialog()}
        </Dialog>
    );
}

AdminUserBalanceDialog.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
    userSelected: PropTypes.object,
}
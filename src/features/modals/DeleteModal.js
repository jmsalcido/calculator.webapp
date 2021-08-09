import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, Modal } from "@material-ui/core";

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function DeleteModal(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const { open, handleClose, handleAgree } = props;

    return (
        <Modal
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Delete?</h2>
                <p id="simple-modal-description">
                    Do you want to delete this item?
                </p>
                <Button onClick={handleClose}>Dismiss</Button>
                <Button onClick={handleAgree}>Agree</Button>
            </div>
        </Modal>
    );
}

DeleteModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleAgree: PropTypes.func.isRequired,
}

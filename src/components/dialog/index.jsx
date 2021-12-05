import React from "react";
import PropTypes from "prop-types";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Dialog = (props) => {
  const { onDialogClosed, onDialogConfirm, selectedLink } = props;

  return (
    <>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
      {/* <div className="dialog-container">
        <div className="dialog-header">Remove Link</div>
        <div className="dialog-body">
          <p>
            Do you want to remove:
            <span data-testid="dialog-span">{selectedLink.name}</span>
          </p>
        </div>
        <div className="dialog-footer">
          <button className="dialog-button" onClick={onDialogConfirm}>
            OK
          </button>
          <button className="dialog-button" onClick={onDialogClosed}>
            CANCEL
          </button>
        </div>
        <Icon
         // icon={faTimes}
          className="close-icon"
          onClick={onDialogClosed}
        />
      </div>
      <div className="overlay" onClick={onDialogClosed}></div> */}
    </>
  );
};

Dialog.propTypes = {
  onDialogClosed: PropTypes.func,
  onDialogConfirm: PropTypes.func,
  selectedLink: PropTypes.object
};

export default Dialog;
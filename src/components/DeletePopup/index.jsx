import React from "react";
import PropTypes from "prop-types";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import StyledButton from '../Button';


const DeletePopup = ({onDialogClosed, onDialogConfirm, selectedLink, onDialogOpened}) => {
 
  return (
    <>
    <Dialog
    open={onDialogOpened}
    onClose={onDialogClosed}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      Remove Link
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      Do you want to remove: {selectedLink.name} ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
    
      <StyledButton 
       id="secondary-button"
       variant='outlined'
       color='primary'
       onClick={onDialogConfirm} autoFocus>
        Remove
      </StyledButton>
      <StyledButton
       id="secondary-button"
       variant='outlined'
       color='primary'
       onClick={onDialogClosed}>Cancel</StyledButton>
    </DialogActions>
  </Dialog>
    </>
  );
};

DeletePopup.propTypes = {
  onDialogClosed: PropTypes.func,
  onDialogConfirm: PropTypes.func,
  selectedLink: PropTypes.object,
  setIsOpen: PropTypes.func,
  open: PropTypes.bool
};

export default DeletePopup;
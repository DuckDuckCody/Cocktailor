import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';

class RemoveIngredientModal extends React.Component {
  handleClose = (remove) => {
    this.props.closeModal(remove);
  };

  render() {
    const style = {
      removeButton: {
          color: '#FD295D'
      },
      cancelButton: {
        color: '#10C0FD'
      }
    }
    const open = this.props.open

    return (
      <div>
        <Dialog
          open={open}
          onClose= {(e) => this.handleClose(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Remove this item?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove {this.props.nameRemoving}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={(e) => this.handleClose(false)} color="primary" style={style.cancelButton}>
              Cancel
            </Button>
            <Button onClick={(e) => this.handleClose(true)} color="primary" style={style.removeButton} autoFocus>
              Remove
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

RemoveIngredientModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  nameRemoving: PropTypes.string.isRequired
}

export default RemoveIngredientModal;

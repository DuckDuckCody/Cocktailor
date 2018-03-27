import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

class SnackBar extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.closeSnackBar(reason === 'undo');
  };

  render() {
    const open = this.props.open

    return (
      <div>
        <Snackbar
          anchorOrigin={{
          vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              {this.props.nameRemoved} has been removed
            </span>}
          action={[
            <Button key="undo" color="secondary" size="small"
              onClick={(e) => this.handleClose(e, 'undo')}>
              UNDO
            </Button>,
            <Button key="remove" color="secondary" size="small"
              onClick={(e) => this.handleClose()}>
              <i className="fa fa-close"></i>
            </Button>
          ]}
        />
      </div>
    );
  }
}

SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  nameRemoved: PropTypes.string.isRequired,
  closeSnackBar: PropTypes.func.isRequired
};

export default SnackBar;

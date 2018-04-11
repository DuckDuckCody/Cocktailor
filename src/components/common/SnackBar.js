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
    const style = {
      closeButton: {
        color: 'white'
      }
    }
    //snack bar at top for phones to not overlap with the phone nav bar
    const anchorOrigin = (
      this.props.inPhoneLayout
      ?
        {
          vertical: 'top',
          horizontal: 'left',
        }
      :
        {
          vertical: 'bottom',
          horizontal: 'left',
        }
    )

    return (
      <div>
        <Snackbar
          anchorOrigin={anchorOrigin}
          open={open}
          autoHideDuration={2500}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              {this.props.nameRemoved} {this.props.message}
            </span>}
          action={[
            <Button key="undo" color="secondary" size="small"
              onClick={(e) => this.handleClose(e, 'undo')}>
              UNDO
            </Button>,
            <Button key="remove" color="secondary" size="small" style={style.closeButton}
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
  message: PropTypes.string.isRequired,
  nameRemoved: PropTypes.string.isRequired,
  closeSnackBar: PropTypes.func.isRequired,
  inPhoneLayout: PropTypes.bool.isRequired
};

export default SnackBar;

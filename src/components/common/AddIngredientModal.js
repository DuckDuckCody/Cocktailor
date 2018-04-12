import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Search from './Search';
import PropTypes from 'prop-types';

class AddIngredientModal extends React.Component {
  handleClose = () => {
    this.props.closeModal();
  };

  searchChange = (ingredient) => {
    this.props.searchChange(ingredient);
  };

  render() {
    const theme = createMuiTheme({
      overrides: {
        MuiDialog: {
          paper: {
            display: 'flex',
            flexDirection: 'column',
            flex: '0 1 auto',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'visible',
            '&:focus': {
              outline: 'none',
            },
          },
        },
        MuiDialogContent: {
          root: {
            flex: '1 1 auto',
            padding: '0 24px 24px 24px',
            overflowY: 'visible'
          }
        }
      },
    });

    const style = {
      button: {
        color: '#10C0FD'
      }
    }

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Dialog
            open={this.props.open}
            onClose= {(e) => this.handleClose(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
          >
            <DialogContent>
              <DialogTitle id="alert-dialog-title">
                {"Add Ingredients"}
              </DialogTitle>
              <div id="searchContainer">
                <Search
                  searchValues = {this.props.ingredients}
                  handleChange = {this.searchChange}
                  error = {this.props.searchError}
                  errorText = {this.props.errorText}
                  dismissWarning = {this.props.dismissWarning}
                  labelKey = "name"
                  valueKey = "ingredientId"
                  placeholder = "Search ingredients here"
                />
              </div>
              <DialogActions>
                <Button onClick={(e) => this.handleClose()} color="primary" style={style.button}>
                  Close
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

AddIngredientModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  searchError: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  dismissWarning: PropTypes.func.isRequired,
  searchChange: PropTypes.func.isRequired
}

export default AddIngredientModal;

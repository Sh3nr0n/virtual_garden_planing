import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const styles = {
  styleToCreate: {}
};

class VegSelectionDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
    console.log("VegSelectionDialog vegetable.name is:", value);
  };

  render() {
    const { vegList, classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Fragment>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          {...other}
        >
          <DialogTitle id="simple-dialog-title">
            Choisissez un légume à planter
          </DialogTitle>
          <List>
            {vegList.map((vegetable, i) => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(vegetable.img)}
                key={i}
              >
                <ListItemText primary={vegetable.name} />
                <img
                  src={vegetable.img}
                  alt={"Image_" + vegetable.id}
                  name={vegetable.name}
                />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </Fragment>
    );
  }
}

VegSelectionDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

export default withStyles(styles)(VegSelectionDialog);

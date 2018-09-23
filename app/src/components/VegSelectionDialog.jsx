import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const styles = {
  // style settings here
}

class VegSelectionDialog extends React.Component {
  
  handleClose = () => {
    this.props.onClose(this.props.openVegDialog);
  };

  handleClickItem = value => {
    this.props.handleClick(value);
  };

  render() {
    const { vegList,open } = this.props;

    return (
      <Fragment>
        <Dialog
          open = {open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">
            Choisissez un légume à planter
          </DialogTitle>
          <List>
            {vegList.map((vegetable, i) => (
              <ListItem
                button
                onClick={() => this.handleClickItem(vegetable.img)}
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
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  handleClick : PropTypes.func.isRequired,
  vegList: PropTypes.array.isRequired,
};

export default withStyles(styles)(VegSelectionDialog);

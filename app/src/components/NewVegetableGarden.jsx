import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
// import { Button, Grid, GridList, GridListTile } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import VegSelectionDialog from "./VegSelectionDialog";
import Lines from "./Lines";

const styles = {
  grid: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGrid: {
    position: "fixed",
    bottom: 0,
    right: 0,
    marginRight: "2%",
    marginBottom: "2%"
  },
  addButton: {
    color: "red"
  },
  deleteButton: {
    backgroundColor: "yellow"
  }
};
class NewVegetableGarden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openVegDialog: false,
      id: "",
      selectedValue: "",
      numLine: [0],
      selectedImageId: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //TO DO : Manage case when nothing clicked by the user onDialogClose
    if (prevState.selectedImageId) {
      if (this.state.numLine === 0) {
        console.log("no icon image to update");
      } else {
        this.updateImage(this.state.selectedImageId);
      }
    }
  }

  handleClickImage = imageId => {
    console.log(imageId);
    this.setState({
      openVegDialog: true,
      selectedImageId: imageId
    });
  };

  handleCloseDialog = value => {
    this.setState({
      selectedValue: value,
      openVegDialog: false
    });
    console.log("selectedValue is:", value);
    console.log("selectedImageId is ", this.state.selectedImageId);
  };

  updateImage = element => {
    console.log("element to search :", element);
    if (this.state.selectedValue) {
      document.getElementById(element).src = this.state.selectedValue;
      console.log("new src is :", document.getElementById(element).src);
    }
  };

  onAddLine = () => {
    console.log("this.state.numLine", this.state.numLine);
    let lines = this.state.numLine;
    let length = this.state.numLine.length;
    lines.push(length);
    this.setState({
      numLine: lines
    });
  };

  onRemoveLine = () => {
    let lines = this.state.numLine;
    console.log("lines remove", lines);
    let length = this.state.numLine.length - 1;
    let slice = lines.slice(0, length);
    this.setState({
      numLine: slice
    });
  };

  render() {
    const { classes, vegetables } = this.props;
    const { numLine } = this.state;

    return (
      <Fragment>
        <Grid container className={classes.grid}>
          <Grid item xs={9}>
            <Lines numLine={numLine} handleClickImage={this.handleClickImage} />
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              className={classes.buttonGrid}
              direction="column"
              justify="flex-end"
              alignItems="flex-end"
            >
              <Button onClick={this.onAddLine}>
                <Icon className={classes.addButon}>add_circle</Icon>
              </Button>
              {this.state.numLine.length > 1 ? (
                <Button onClick={() => this.onRemoveLine()}>
                  <Icon className={classes.deleteButon}>remove_circle</Icon>
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Grid>

        <VegSelectionDialog
          open={this.state.openVegDialog}
          onClose={this.handleCloseDialog}
          vegList={vegetables}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(NewVegetableGarden);

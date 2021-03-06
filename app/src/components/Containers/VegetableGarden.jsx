import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Header from "../Header";

// import { Button, Grid, GridList, GridListTile } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import VegSelectionDialog from "../GardenComponents/VegSelectionDialog";
import Lines from "../GardenComponents/Lines";

//Import the images used to display the vegetable icons
import tomatImg from "../../images/VegIcons/icons8-tomate-48.png";
import carotImg from "../../images/VegIcons/icons8-carotte-48.png";
import auberImg from "../../images/VegIcons/icons8-aubergine-48.png";
import radisImg from "../../images/VegIcons/icons8-radis-48.png";

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
    color: "green"
  },
  deleteButton: {}
};
class VegetableGarden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openVegDialog: false,
      selectedValue: "",
      numLine: [0],
      selectedImageId: ""
      // imageClicked: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedImageId && this.state.selectedValue) {
        this.updateImage(this.state.selectedImageId);
        this.setState({
          selectedValue: ""
        });
    }
  }

  handleClickImage = imageId => {
    this.setState({
      openVegDialog: true,
      selectedImageId: imageId
    });
  };

  handleCloseDialog = () => {
    this.setState({
      openVegDialog: false
    });
  };

  handleClickDialog = (value, click) => {
    this.setState({
      selectedValue: value,
      openVegDialog: false
      // imageClicked: click
    });
    this.updateImage(this.state.selectedImageId);

    // console.log("handleOpenDialog selectedValue is : %s, openVegDialog is : %s, imageClicked is : %s ", value, this.state.openVegDialog, click);
    // console.log("selectedImageId is ", this.state.selectedImageId);
  };

  updateImage = element => {
    // console.log("element to search :", element);
    // if (this.state.selectedValue) {
    document.getElementById(element).src = this.state.selectedValue;
    // console.log("new src is :", document.getElementById(element).src);
    // }
  };

  onAddLine = () => {
    // console.log("this.state.numLine", this.state.numLine);
    let lines = this.state.numLine;
    let length = this.state.numLine.length;
    lines.push(length);
    this.setState({
      numLine: lines
    });
  };

  onRemoveLine = () => {
    let lines = this.state.numLine;
    // console.log("lines remove", lines);
    let length = this.state.numLine.length - 1;
    let slice = lines.slice(0, length);
    this.setState({
      numLine: slice
    });
  };

  render() {

// Temporary array of vegetable objects, to be removed when backend exists
// Note : replace src property in "VegSelectionDialog" with correct file url when app goes online

const vegetables = [
  {
    id: 1,
    name: "tomate",
    img: tomatImg
  },
  {
    id: 2,
    name: "carotte",
    img: carotImg
  },
  {
    id: 3,
    name: "aubergine",
    img: auberImg
  },
  {
    id: 4,
    name: "radis",
    img: radisImg
  }
];

    const { classes } = this.props;
    const { numLine, openVegDialog } = this.state;
    // console.log("Parent props",this.props)

    console.log("Parent state", this.state);

    return (
      <Fragment>
      <Header title = {'Créer un plan de potager'} />

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
                <Icon className={classes.addButton}>add_circle</Icon>
              </Button>
              {this.state.numLine.length > 1 ? (
                <Button onClick={() => this.onRemoveLine()}>
                  <Icon className={classes.icon} color="action">
                    remove_circle
                  </Icon>
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Grid>

        <VegSelectionDialog
          open={openVegDialog}
          onClose={this.handleCloseDialog}
          handleClick={this.handleClickDialog}
          vegList={vegetables}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(VegetableGarden);

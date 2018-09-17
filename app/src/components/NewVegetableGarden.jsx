import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, GridList, GridListTile } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import VegSelectionDialog from "./VegSelectionDialog";
import ImageLink from "./ImageLink.jsx";

//Import the images used o display the vegetable icons
import tomatImg from "../ico_img/icons8-tomate-48.png";
import carotImg from "../ico_img/icons8-carotte-48.png";
import auberImg from "../ico_img/icons8-aubergine-48.png";
import radisImg from "../ico_img/icons8-radis-48.png";
import ground from "../ico_img/icons8-vagues-filled-50.png";

const styles = {
  gridList: {
    width: "100%",
    height: "10vh",
    overflow: "hidden"
  },
  grid: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageLink: {},
  buttonGrid:{

  }
};

class NewVegetableGarden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openVegDialog: false,
      id: "",
      selectedValue: "",
      numLine: 0,
      selectedImageId: ""
    };
  }

  handleClickOpen = imageId => {
    this.setState({
      openVegDialog: true,
      selectedImageId: imageId
    });
  };

  handleClose = value => {
    this.setState({
      selectedValue: value,
      openVegDialog: false
    });
    console.log("selectedValue is:", value);
    console.log("selectedImageId is ", this.state.selectedImageId);
  };

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

  updateImage = element => {
    console.log("element to search :", element);
    if (this.state.selectedValue) {
      document.getElementById(element).src = this.state.selectedValue;
      console.log("new src is :", document.getElementById(element).src);
    }
  };

  onAddLine = () => {
    this.setState({
      numLine: this.state.numLine + 1
    });
  };

  onRemoveLine = () => {
    this.setState({
      numLine: this.state.numLine - 1
    });
  };

  render() {
    // Temporary array of vegetable objects, to be removed when backend exists
    const vegetables = [
      {
        id: 1,
        name: "tomate",
        img: tomatImg,
        src: "../ico_img/icons8-tomate-48.png"
      },
      {
        id: 2,
        name: "carotte",
        img: carotImg,
        src: "../ico_img/icons8-carotte-48.png"
      },
      {
        id: 3,
        name: "aubergine",
        img: auberImg,
        src: "../ico_img/icons8-aubergine-48.png"
      },
      {
        id: 4,
        name: "radis",
        img: radisImg,
        src: "../ico_img/icons8-radis-48.png"
      }
    ];

    const { classes } = this.props;

    const removeButton = (
      <Button onClick={() => this.onRemoveLine()}>
      <Icon color="primary">
              remove_circle
            </Icon>
      </Button>
    );

    const newLines = [];

    for (let i = 0; i < this.state.numLine; i += 1) {
      console.log("ligne n°", this.state.numLine);
      newLines.push(
        <div key={i}>
          <GridList className={classes.gridList} cols={12}>
            <GridListTile cols={2}>
              <Button
                onClick={() => {
                  this.handleClickOpen("img1row" + i);
                }}
              >
                <ImageLink
                  className={classes.imageLink}
                  id={"img1row" + i}
                  src={ground}
                />
              </Button>
            </GridListTile>
            <GridListTile cols={2}>
              <Button
                onClick={() => {
                  this.handleClickOpen("img2row" + i);
                }}
              >
                <ImageLink
                  className={classes.imageLink}
                  id={"img2row" + i}
                  src={ground}
                />
              </Button>
            </GridListTile>
            <GridListTile cols={2}>
              <Button
                onClick={() => {
                  this.handleClickOpen("img3row" + i);
                }}
              >
                <ImageLink
                  className={classes.imageLink}
                  id={"img3row" + i}
                  src={ground}
                />
              </Button>
            </GridListTile>
            <GridListTile cols={2}>
              <Button
                onClick={() => {
                  this.handleClickOpen("img4row" + i);
                }}
              >
                <ImageLink
                  className={classes.imageLink}
                  id={"img4row" + i}
                  src={ground}
                />
              </Button>
            </GridListTile>
            <GridListTile cols={2}>
              <Button
                onClick={() => {
                  this.handleClickOpen("img5row" + i);
                }}
              >
                <ImageLink
                  className={classes.imageLink}
                  id={"img5row" + i}
                  src={ground}
                />
              </Button>
            </GridListTile>
            <GridListTile cols={2}>
              <Button
                onClick={() => {
                  this.handleClickOpen("img6row" + i);
                }}
              >
                <ImageLink
                  className={classes.imageLink}
                  id={"img6row" + i}
                  src={ground}
                />
              </Button>
            </GridListTile>
          </GridList>
          <br />
        </div>
      );
    }

    return (
      <Fragment>
        <Grid container className={classes.grid}>
        <Grid item xs={9}>
        {newLines}
        </Grid>
        <Grid item xs={3}>
        <Grid container className={classes.buttonGrid} direction="row" justify="flex-end" alignItems="flex-end">
        <Button onClick={() => this.onAddLine()}>
            <Icon color="secondary">
              add_circle
            </Icon>
          </Button>
          {this.state.numLine > 0 ? removeButton : null}
        </Grid>
        </Grid>

        </Grid>

        <VegSelectionDialog
          open={this.state.openVegDialog}
          onClose={this.handleClose}
          vegList={vegetables}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(NewVegetableGarden);

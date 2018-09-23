import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";
import ground from "../ico_img/icons8-herbe-48.png";

const styles = {
  gridList: {
    width: "100%",
    height: "10vh",
    overflow: "hidden",
    paddingLeft: "10%",
    paddingTop: "2%"
  },
  imageLink: {
    width: "auto",
    height: "8vh"
  }
};

class Lines extends Component {
  handleClickOpen = imageId => {
    this.props.handleClickImage(imageId);
  };

  render() {
    const { classes, numLine } = this.props;
    console.log("numLine chidren = ", this.props.numLine);

    return numLine.map(lineRank => {
      return (
        <Fragment key={lineRank}>
          <GridList className={classes.gridList} cols={12}>
            <GridListTile cols={2}>
              <img
                className={classes.imageLink}
                id={"img1row" + lineRank}
                src={ground}
                alt={"ground"}
                onClick={() => 
                  this.handleClickOpen("img1row" + lineRank)
                }
              />
            </GridListTile>
            <GridListTile cols={2}>
              <img
                className={classes.imageLink}
                id={"img2row" + lineRank}
                src={ground}
                alt={"ground"}
                onClick={() => {
                  this.handleClickOpen("img2row" + lineRank);
                }}
              />
            </GridListTile>
            <GridListTile cols={2}>
              <img
                className={classes.imageLink}
                id={"img3row" + lineRank}
                src={ground}
                alt={"ground"}
                onClick={() => {
                  this.handleClickOpen("img3row" + lineRank);
                }}
              />
            </GridListTile>
            <GridListTile cols={2}>
              <img
                className={classes.imageLink}
                id={"img4row" + lineRank}
                src={ground}
                alt={"ground"}
                onClick={() => {
                  this.handleClickOpen("img4row" + lineRank);
                }}
              />
            </GridListTile>
            <GridListTile cols={2}>
              <img
                className={classes.imageLink}
                id={"img5row" + lineRank}
                src={ground}
                alt={"ground"}
                onClick={() => {
                  this.handleClickOpen("img5row" + lineRank);
                }}
              />
            </GridListTile>
            <GridListTile cols={2}>
              <img
                className={classes.imageLink}
                id={"img6row" + lineRank}
                src={ground}
                alt={"ground"}
                onClick={() => {
                  this.handleClickOpen("img6row" + lineRank);
                }}
              />
            </GridListTile>
          </GridList>
          <br />
        </Fragment>
      );
    });
  }
}

Lines.propTypes = {
  numline: PropTypes.array,
  handleClickImage: PropTypes.func.isRequired,
};

export default withStyles(styles)(Lines);

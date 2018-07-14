//######################
//Done: Create a component containing one line
//Done: Create buttons to add or delete a new line in the garden
//Done: Add the "add" and "delete" buttons in the latest added line and make them dispear from the previous line
//Done :Show the "delete" button when there is at least one line in the view (this.state >0), use of a ternary operator "?"" to display the "removeButton" or to hide it 
//Done: Change the ground image
//Done : Create a vegetable test object
//Done : Add a <Modal/> component to call on click on a line
//Done : Use the map() method to loop through this object and display them on a modal element
//Done : On click on a vegetable from modal, add it into the lines
//To Do : On click on a vegetable from modal, add it into the specific line it was clicked from
//To Do: Refactorize this component into several components
//To Do: Add animations + sounds around the garden area
//To Do: Maybe in another component : add a fruit/vegetable onClick on a line
//######################

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageLink from './ImageLink.jsx'

const styles = {
    gridList: {
        width: '100%',
        height: '5vh',
      },
    grid:{
        justifyContent:'center',
        alignItems:'center'
    }
  };

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numLine: 0,
        };
    }

    onAddLine = () => {
        this.setState({
            numLine: this.state.numLine + 1
        });
    }

    onRemoveLine = () => {
        this.setState({
            numLine: this.state.numLine - 1
        });
    }

    render() {

        const {classes} = this.props

        console.log("Hide delete button : ", this.state.numLine < 1);
        const removeButton = <Button 
                                onClick={() => this.onRemoveLine()}
                            >
                             Remove previous Line   
                            </Button>

        const newLines = [];

        for (let i = 0; i < this.state.numLine; i += 1) {

            console.log("ligne n°",this.state.numLine);
            newLines.push(
                <div key={i} >
                <GridList className={classes.gridList} cols={12}>
                    <GridListTile cols={2}>
                        <ImageLink id={'img1row'+i}/>
                    </GridListTile>
                    <GridListTile cols={2}>
                        <ImageLink id={'img2row'+i}/>
                    </GridListTile>
                    <GridListTile cols={2}>
                        <ImageLink id={'img3row'+i}/>
                    </GridListTile>
                    <GridListTile cols={2}>
                        <ImageLink id={'img4row'+i}/>
                    </GridListTile>
                    <GridListTile cols={2}>
                        <ImageLink id={'img5row'+i}/>
                    </GridListTile>
                    <GridListTile cols={2}>
                        <ImageLink id={'img6row'+i}/>
                    </GridListTile>
                </GridList> 
                <br/>        


                </div>
            );
        };

        return (
            <Fragment>
                <Grid container className={classes.grid}>
                    {newLines}
                    {this.state.numLine >0 ? removeButton: null}
                    <Button 
                        onClick={() => this.onAddLine()}
                    >
                    Add new Line
                    </Button>
                </Grid>
            </Fragment>

        );
    }
}

Line.propTypes = {
    // classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (Line);
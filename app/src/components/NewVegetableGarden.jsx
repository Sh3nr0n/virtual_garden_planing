import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Button,
    Grid,
    GridList,
    GridListTile
} from '@material-ui/core';


import VegSelectionDialog from './VegSelectionDialog';
import ImageLink from './ImageLink.jsx'

//Import the images used o display the vegetable icons
import tomatImg from '../ico_img/icons8-tomate-48.png';
import carotImg from '../ico_img/icons8-carotte-48.png';
import auberImg from '../ico_img/icons8-aubergine-48.png';
import radisImg from '../ico_img/icons8-radis-48.png';
import ground from '../ico_img/icons8-vagues-filled-50.png';


const styles = {
    gridList: {
        width: '100%',
        height: '5vh',
      },
    grid:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageLink:{
        height:'1vh',
        width:'1vw'
    }
  };

class NewVegetableGarden extends React.Component {
    constructor(props){
        super(props);
        this.state={
            openVegDialog:false,
            id:'',
            selectedValue:'',
            numLine: 0,
            selectedImageId:''
        };
    }

      handleClickOpen = (imageId) => {
        this.setState({
            openVegDialog: true,
            selectedImageId:imageId
        });
      };
    
      handleClose = value => {
        this.setState({ 
            selectedValue: value,
            openVegDialog: false,
            });
            console.log("selectedValue is:",value);
            console.log('selectedImageId is ',this.state.selectedImageId);
            this.updateImage(this.state.selectedImageId);
        

      };

    updateImage = (element,src) => {
        // document.getElementById(element).src = this.state.selectedValue;
        console.log("element to search :",element);
        document.getElementById(element).src = this.state.selectedValue;
        console.log('new src is :',  document.getElementById(element).src);


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
        // Temporary array of vegetable objects, to be removed when backend exists
        const vegetables = [{
            id: 1,
            name: 'tomate',
            img: tomatImg,
            src: '../ico_img/icons8-tomate-48.png'
        }, {
            id: 2,
            name: 'carotte',
            img: carotImg,
            src: '../ico_img/icons8-carotte-48.png'
        }, {
            id: 3,
            name: 'aubergine',
            img: auberImg,
            src: '../ico_img/icons8-aubergine-48.png'
    
        }, {
            id: 4,
            name: 'radis',
            img: radisImg,
            src: '../ico_img/icons8-radis-48.png'
    
        }]

        const {classes} = this.props
        
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
                    <Button onClick={() => {this.handleClickOpen('img1row'+i)}}>                        
                        <ImageLink
                            className={classes.imageLink} 
                            id={'img1row'+i}
                            src={ground}
                        />
                    </Button>
                    </GridListTile>
                    <GridListTile cols={2}>
                    <Button onClick={() => {this.handleClickOpen('img2row'+i)}}>                        
                        <ImageLink
                            className={classes.imageLink} 
                            id={'img2row'+i}
                            src={ground}
                        />
                    </Button>
                    </GridListTile>
                    <GridListTile cols={2}>
                    <Button onClick={() => {this.handleClickOpen('img3row'+i)}}>                        
                        <ImageLink
                            className={classes.imageLink} 
                            id={'img3row'+i}
                            src={ground}
                        />
                    </Button>
                    </GridListTile>
                    <GridListTile cols={2}>
                    <Button onClick={() => {this.handleClickOpen('img4row'+i)}}>                        
                        <ImageLink
                            className={classes.imageLink} 
                            id={'img4row'+i}
                            src={ground}
                        />
                    </Button>
                    </GridListTile>
                    <GridListTile cols={2}>
                    <Button onClick={() => {this.handleClickOpen('img5row'+i)}}>                        
                        <ImageLink
                            className={classes.imageLink} 
                            id={'img5row'+i}
                            src={ground}
                        />
                    </Button>
                    </GridListTile>
                    <GridListTile cols={2}>
                    <Button onClick={() => {this.handleClickOpen('img6row'+i)}}>                        
                        <ImageLink
                            className={classes.imageLink} 
                            id={'img6row'+i}
                            src={ground}
                        />
                    </Button>
                    </GridListTile>

                   
                </GridList> 
                <br/>        


                </div>
            );
        };

        return (
            <Fragment>
                <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
                <Grid container className={classes.grid}>
                    {newLines}
                    {this.state.numLine >0 ? removeButton: null}
                    <Button 
                        onClick={() => this.onAddLine()}
                    >
                    Add new Line
                    </Button>
                </Grid>
                
                <VegSelectionDialog
                    selectedValue={this.state.selectedValue}
                    open={this.state.openVegDialog}
                    onClose={this.handleClose}
                    vegList={vegetables}
                >

                </VegSelectionDialog>
            </Fragment>
        );
    }
}

export default withStyles(styles) (NewVegetableGarden);
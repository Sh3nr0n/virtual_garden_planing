import React, { Fragment } from 'react';
import Line from './Line.jsx';
import { withStyles } from '@material-ui/core/styles';
import VegSelectionDialog from './VegSelectionDialog';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Import the images used o display the vegetable icons
import tomatImg from '../ico_img/icons8-tomate-48.png';
import carotImg from '../ico_img/icons8-carotte-48.png';
import auberImg from '../ico_img/icons8-aubergine-48.png';
import radisImg from '../ico_img/icons8-radis-48.png';


const styles = {
    styleToCreate: {
      
    },
  };

class NewVegetableGarden extends React.Component {
    constructor(props){
        super(props);
        this.state={
            openVegDialog:false,
            selectedValue:''

        };
    }

      handleClickOpen = () => {
        this.setState({
            openVegDialog: true,
        });
      };
    
      handleClose = value => {
        this.setState({ 
            selectedValue: value,
            openVegDialog: false 
            });
            console.log("NewVegetableGarden vegetable.name is:",value);

      };

    render() {

        const vegetables = [{
            id: 1,
            name: 'tomate',
            img: tomatImg,
            src: '../ico_img/icons8-tomate-48.png'
        }, {
            id: 2,
            name: 'carotte',
            img: carotImg
        }, {
            id: 3,
            name: 'aubergine',
            img: auberImg
    
        }, {
            id: 4,
            name: 'radis',
            img: radisImg
    
        }]

        return (
            <Fragment>
                <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
                <Grid container >
                    <Line />
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
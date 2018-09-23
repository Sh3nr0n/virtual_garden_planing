//######################
//To Do: Display automatically the navbar on desktop and larger devices
//To Do: Add the href in the SideNavItem when pages are developped
//######################
import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PlaceIcon from "@material-ui/icons/Place";
//Note TypeScript is needed to use the withStyles component
//check https://github.com/Microsoft/TypeScript
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  menuButton: {},
  flex: {
    flex: 1
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
  }

  toggleDrawer = () => {
    this.setState({
      openDrawer: true
    });
  };

  untoggleDrawer = () => {
    this.setState({
      openDrawer: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Créer un plan de potager
          </Typography>

          <Drawer open={this.state.openDrawer} onClose={this.untoggleDrawer}>
            <List
              component="nav"
              role="button"
              onClick={this.untoggleDrawer}
              onKeyDown={this.untoggleDrawer}
            >
            <ListItem button component="a" href="/">
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Accueil" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Visite guidée" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Mes potagers" />
              </ListItem>
              <ListItem button component="a" href="/potager">
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Nouveau potager" href="/potager" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Les cultures associées" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Les engrais biologiques" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Les traitements biologiques" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Fiches plantation" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Fiches entretien" />
              </ListItem>
              <ListItem button component="a" href="/contact">
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText inset primary="Contactez-moi" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

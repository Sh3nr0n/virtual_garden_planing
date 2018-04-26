//######################
//Done: Create a sidenav
//To Do: Display automatically the navbar on desktop and larger devices
//To Do: Add the href in the SideNavItem when pages are developped
//######################
import React from 'react';
import logo from './logo.svg';
import './Header.css';

//Declare the classe to import from materialize before we can use them in the actual component
import { Navbar, SideNav, Button, SideNavItem } from 'react-materialize';
//Test : set up the value to display in the home menu using a variable
const menu = "Accueil";
//Insert the logo and name in a title variable, we call title in the virtual DOM using {title}, {} allows to use a javascript expression (and only one)
const title = <div className="row">
    <div className="col s2"><img src={logo} className="Header-logo" alt="logo" /> </div>
    <div className="col s6 center-align"> Mon Potager Virtuel </div>   
    </div>;

//Export the component as a "named" component, e.g. Header must be called between {} when imported : import {Header} from './Header'
export class Header extends React.Component {


    render() {
        // SideNav : trigger is a component that is rendered to trigger the sidenav, options are customizable settings available from the Materialize framework (e.g. { closeOnClick: true })

        //For testing purpose: ()=> console.log('test click') is the same as function(){console.log('test click')

        return (
            <Navbar className="center-align" brand={title}>
                <SideNav
                    trigger={< Button >{menu}</Button >}
                    options={{ closeOnClick: true }}
                >
                    <SideNavItem onClick={() => console.log('test click')} > Visite guidée </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Mes potagers</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Nouveau potager</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Les cultures associées</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Les engrais biologiques</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Les traitements biologiques</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Fiches plantation</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Fiches entretien</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href='#.html'>Contactez-moi</SideNavItem>
                </SideNav >
            </Navbar>
        );
    }
}

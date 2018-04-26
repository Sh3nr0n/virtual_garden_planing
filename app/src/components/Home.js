import React from 'react';
import {Line} from './Line';
import {Container } from 'react-materialize';


export class Home extends React.Component{
    render(){
        return(
            <div>
            <Container>
                <Line/>
            </Container>
            </div>
        );
    }
}
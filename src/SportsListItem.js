import React, { Component } from 'react';
import './App.css';

class SportsListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            sport: this.props.sport
        };
    }       
    
    render (){

    return (
        <div>
            <div className="list-item">{this.state.sport}</div>
        </div>
    )
}}

export default SportsListItem;
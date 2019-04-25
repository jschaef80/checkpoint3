import React, { Component } from 'react';
import SportsListItem from './SportsListItem';
import './App.css';

class SportsList extends Component {
    constructor(props){
        super(props);
        this.state = {
        sports: ['Skateboard', 'BMX', 'Mountain Bike', 'Wakeboard', 'Snowboard', 'Rock Climb', 'Sky Dive', 'Surf', 'Scuba Diving', ]
        };
    }       
    
    render (){
        return (
            <div className='sports-list'>
                {this.state.sports.map((sport, index)=>{
                        return <div key={index}><SportsListItem sport={sport}/></div>
                    })}
            </div>
        )
}}

export default SportsList;
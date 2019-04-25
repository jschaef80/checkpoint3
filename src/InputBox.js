import React, { Component } from 'react';
import './App.css';

class InputBox extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }     
      
    render (){
    return (
        <div>
            <div><input type='text' id='zip' placeholder='ZIP code'></input></div>
            <div><input type='text' id='distance' placeholder='Distance'></input></div>
            <div><button id='submitbutton' type='submit'>Submit</button></div>
        </div>
    )
}}

export default InputBox;
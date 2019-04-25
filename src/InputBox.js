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
        <div className="input-box">
            <input type='text' id='zip' placeholder='ZIP code'></input>
            <input type='text' id='distance' placeholder='Distance'></input>
            <button id='submitbutton' type='submit'>Submit</button>
        </div>
    )
}}

export default InputBox;
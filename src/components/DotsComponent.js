import React, { Component } from 'react';
import ReactTooltip from "react-tooltip";

const dot = {
    height: '10px',
    width: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: '5px',
    display: 'inline-block'
};

const dotsel = {
    height: '10px',
    width: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255,255,0,0.9)',
    margin: '5px',
    display: 'inline-block'
};

export default class Dots extends Component{
    constructor(props){
        super(props);
        this.state={
            hasChanged: false
        }
    };

    choose = (ev) => {
        this.setState({hasChanged: true});
        this.props.dotLink(ev);
    };

    render(){
        return (
            <div className="paginationDots">
                <span onClick={() => this.choose(1)} data-toggle="tooltip" data-tip data-for="home" style={this.props.selected === 1 ? dotsel : dot}></span>
                <ReactTooltip id="home" place="top" effect="solid">Inicio</ReactTooltip>
                <span onClick={() => this.choose(2)} data-toggle="tooltip" data-tip data-for="hear" style={this.props.selected === 2 ? dotsel : dot}></span>
                <ReactTooltip id="hear" place="top" effect="solid">Discapacidad Auditiva</ReactTooltip>
                <span onClick={() => this.choose(3)} data-toggle="tooltip" data-tip data-for="vision" style={this.props.selected === 3 ? dotsel : dot}></span>
                <ReactTooltip id="vision" place="top" effect="solid">Discapacidad Visual</ReactTooltip>
                <span onClick={() => this.choose(4)} data-toggle="tooltip" data-tip data-for="physics" style={this.props.selected === 4 ? dotsel : dot}></span>
                <ReactTooltip id="physics" place="top" effect="solid">Discapacidad Físico/Motora</ReactTooltip>
                <span onClick={() => this.choose(5)} data-toggle="tooltip" data-tip data-for="visceral" style={this.props.selected === 5 ? dotsel : dot}></span>
                <ReactTooltip id="visceral" place="top" effect="solid">Discapacidad Visceral</ReactTooltip>
            </div >
        );
    }
}






import React from 'react';
import ReactTooltip from "react-tooltip";
import {NavLink} from "reactstrap";

function Dots(props) {

    const selected = props.selected;

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

    return (
        <div className="paginationDots" onClick={() => console.log(props)}>
            <span data-toggle="tooltip" data-tip data-for="home" style={selected === 1 ? dotsel : dot}></span>
            <ReactTooltip id="home" place="top" effect="solid">Inicio</ReactTooltip>
            <span data-toggle="tooltip" data-tip data-for="hear" style={selected === 2 ? dotsel : dot}></span>
            <ReactTooltip id="hear" place="top" effect="solid">Discapacidad Auditiva</ReactTooltip>
            <span data-toggle="tooltip" data-tip data-for="vision" style={selected === 3 ? dotsel : dot}></span>
            <ReactTooltip id="vision" place="top" effect="solid">Discapacidad Visual</ReactTooltip>
            <span data-toggle="tooltip" data-tip data-for="physics" style={selected === 4 ? dotsel : dot}></span>
            <ReactTooltip id="physics" place="top" effect="solid">Discapacidad Físico/Motora</ReactTooltip>
            <span data-toggle="tooltip" data-tip data-for="visceral" style={selected === 5 ? dotsel : dot}></span>
            <ReactTooltip id="visceral" place="top" effect="solid">Discapacidad Visceral</ReactTooltip>
        </div >
    );
}

export default Dots;



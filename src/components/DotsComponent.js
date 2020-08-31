import React from 'react';
import { Tooltip } from 'reactstrap';

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
            <span style={selected === 1 ? dotsel : dot}></span>
            <span style={selected === 2 ? dotsel : dot}></span>
            <span style={selected === 3 ? dotsel : dot}></span>
            <span style={selected === 4 ? dotsel : dot}></span>
            <span style={selected === 5 ? dotsel : dot}></span>
        </div >
    );
}

export default Dots;



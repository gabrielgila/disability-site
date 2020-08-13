import React from 'react';

function Second() {

    const divStyle = {
        height: '100vh',
        backgroundColor: '#55b7df',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return(
        <div style={divStyle}>
            <div className="row">
                <div className="col-12">
                    <h3>DISCAPACIDAD FISICO / MOTORA</h3>
                    <p>COMPONENTE 8</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Second;



import React from 'react';

function Second() {

    const divStyle = {
        height: '100vh',
        backgroundColor: '#21b540',
        color: 'white',
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
                    <h3>INCLUSIÓN DE ESTUDIANTES CON DISCAPACIDADES</h3>
                    <p>COMPONENTE 2</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Second;



import React from 'react';

function Fourth() {

    const divStyle = {
        height: '100vh',
        color: 'black',
        backgroundColor: '#f9cd11',
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
                    <h3>DISCAPACIDAD AUDITIVA</h3>
                    <p>COMPONENTE 4</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Fourth;



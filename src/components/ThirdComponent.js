import React from 'react';

function Third() {

    const divStyle = {
        height: '100vh',
        backgroundColor: 'white',
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
                    <h3>IMAGEN AUDITIVA</h3>
                    <p>COMPONENTE 3</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Third;



import React from 'react';

function Fifth() {

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
                    <h3>IMAGEN VISUAL</h3>
                    <p>COMPONENTE 5</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Fifth;



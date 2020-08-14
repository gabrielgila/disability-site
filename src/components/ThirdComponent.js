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

    const imgStyle = {
        height: '50vh'
    };


    return(
        <div style={divStyle}>
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid" style={imgStyle}
                         src={`${process.env.PUBLIC_URL}/assets/images/image_hear.png`}
                         alt="InicioImagen"/>
                </div>
            </div>
        </div>
    );
}

export default Third;



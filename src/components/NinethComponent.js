import React from 'react';

function Nineth() {

    const divStyle = {
        height: '100vh',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const imgStyle = {
        height: '55vh'
    };

    return(
        <div style={divStyle}>
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid" style={imgStyle}
                         src={`${process.env.PUBLIC_URL}/assets/images/image_visceral.png`}
                         alt="InicioImagen"/>
                </div>
            </div>
        </div>
    );
}


export default Nineth;



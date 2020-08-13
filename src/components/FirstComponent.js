import React from 'react';

function First() {

    const divStyle = {
        height: '100vh',
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
                    <img className="img-fluid"
                         src={`${process.env.PUBLIC_URL}/assets/images/home_image.jpg`}
                         alt="InicioImagen"/>
                </div>
            </div>
        </div>
    );
}

export default First;



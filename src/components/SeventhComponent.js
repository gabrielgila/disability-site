import React from 'react';

function Seventh() {

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
                    <img className="" style={imgStyle}
                         src={`${process.env.PUBLIC_URL}/assets/images/image_physic.png`}
                         alt="InicioImagen"/>
                </div>
            </div>
        </div>
    );
}


export default Seventh;



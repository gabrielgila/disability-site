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
        height: '60vh',
        position: 'relative'
    };

    return(
        <div style={divStyle}>
            <div className="row justify-content-center" >
                <div className="col-0">
                    <div className="col-12 container">
                        <div>
                            <img className="" style={imgStyle}
                                    src={`${process.env.PUBLIC_URL}/assets/images/image_hear.png`}
                                    alt="InicioImagen"/>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Third;



import React from 'react';

function Third() {

    return(
        <div className="global-div-component">
            <div className="row justify-content-center" >
                <div className="col-0">
                    <div className="col-12 container">
                        <div>
                            <img className="img-height-50"
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



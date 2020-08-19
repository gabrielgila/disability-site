import React from 'react';

function Fifth() {

    return(
        <div className="global-div-component">
            <div className="row">
                <div className="col-12">
                    <img className="img-height-50"
                         src={`${process.env.PUBLIC_URL}/assets/images/image_vision.png`}
                             alt="InicioImagen"/>
                </div>
            </div>
        </div>
    );
}

export default Fifth;



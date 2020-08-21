import React from 'react';
import Fade from 'react-reveal/Fade';

function First() {

    return(
        <div className="global-div-component">
            <div className="row justify-content-center" >
                <div className="col-0">
                    <Fade left>
                        <div className="col-12">
                            <img className="img-height-60"
                                 src={`${process.env.PUBLIC_URL}/assets/images/home_image.png`}
                                 alt="InicioImagen"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default First;



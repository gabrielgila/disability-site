import React from 'react';

function Seventh() {

    return(
        <div className="global-div-component">
            <div className="row">
                <div className="col-12">
                    <img className="img-height-55"
                         src={`${process.env.PUBLIC_URL}/assets/images/image_physic.png`}
                         alt="Imagen Físico Motora"/>
                </div>
            </div>
        </div>
    );
}

export default Seventh;



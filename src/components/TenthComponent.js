import React from 'react';
import { Button } from "reactstrap";

function Tenth() {

    return (
        <div className="global-tenth-component">
            <div className="row justify-content-center">
                <div className="col-0">
                    <div className="col-12 container">
                        <h5 className="strategy">ESTRATEGIAS DE</h5>
                        <h5 className="strategy">INCLUSIÓgN PARA</h5>
                        <h5 className="strategy">PERSONAS CON</h5>
                        <img className="arrow"
                            src={`${process.env.PUBLIC_URL}/assets/images/arrow_white.png`}
                            alt="Flecha Blanca" />
                    </div>
                    <h1 className="disability-word">DISCAPACIDAD</h1>
                    <h1 className="disability-word-heavy">VISCERAL</h1>
                    <hr />
                </div>
                <div className="col-10">
                    <div>
                        <p className="paragraph">Una persona con discapacidad (PCD) visceral
                        presenta una alteración en la dinámica de las
                        funciones y estructuras corporales de los sistemas
                        cardiovascular, hematológica, inmunológica,
                        respiratoria, digestiva, metabólica, endocrina y
                        genitourinaria.
                        </p>
                        <hr />
                    </div>
                    <div className="pt-3">
                        <Button className="btn button-color-yellow rounded-pill">
                            <h5 className="button-text-dark">Descargar Guía</h5>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tenth;





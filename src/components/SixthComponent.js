import React from 'react';
import {Button} from "reactstrap";

function Sixth() {

    return(
        <div className="global-sixth-component">
            <div className="row justify-content-center">
                <div className="col-0">
                    <div className="col-12 container">
                        <h5 className="strategy">ESTRATEGIAS DE</h5>
                        <h5 className="strategy">INCLUSIÓN PARA</h5>
                        <h5 className="strategy">PERSONAS CON</h5>
                        <img className="arrow"
                             src={`${process.env.PUBLIC_URL}/assets/images/arrow_white.png`}
                             alt="Flecha Blanca"/>
                    </div>
                    <h1 className="disability-word">DISCAPACIDAD</h1>
                    <h1 className="disability-word-heavy">VISUAL</h1>
                    <hr />
                </div>
                <div className="col-10">
                    <div>
                        <p className="paragraph">Dentro de este colectivo algunas personas pueden
                            utilizar material en braille, textos digitalizados,
                            conversor de texto a audio, texto en tamaño
                            aumentativo o con mayor contraste, audio-libro,
                            lectores de pantalla.
                        </p>
                        <hr />
                    </div>
                    <div className="pt-3">
                        <Button className="button-color-yellow rounded-pill">
                            <h5 className="button-text-dark">Descargar Guía</h5>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sixth;







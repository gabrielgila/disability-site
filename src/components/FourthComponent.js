import React from 'react';
import { Button } from 'reactstrap';

function Fourth() {

    return (
        <div className="global-four-component">
            <div className="row justify-content-center">
                <div className="col-0">
                    <div className="col-12 container">
                        <h5 className="strategy">ESTRATEGIAS DE</h5>
                        <h5 className="strategy">INCLUSIÓN PARA</h5>
                        <h5 className="strategy">PERSONAS CON</h5>
                        <img className="arrow"
                            src={`${process.env.PUBLIC_URL}/assets/images/arrow_white.png`}
                            alt="Flecha Blanca" />
                    </div>
                    <h1 className="disability-word">DISCAPACIDAD</h1>
                    <h1 className="disability-word-heavy">AUDITIVA</h1>
                    <hr />
                </div>
                <div className="col-10">
                    <div>
                        <p className="paragraph">Dentro de este colectivo se encuentran personas
                        que usan audífonos, implantes cocleares, otras
                        que leen los labios, otras que necesitan de un
                        intérprete de Lengua de Señas Argentina LSA,
                        pudiendo haber otras variantes. Esto dependerá
                        de la forma de comunicación que tenga cada
                        persona con audición atípica, y por tanto las
                        adaptaciones técnicas y humanas para cada uno
                        también varían.
                        </p>
                        <hr />
                    </div>
                    <div className="pt-3">
                        <Button color="secondary" className="btn rounded-pill btn-shadow" href="https://bit.ly/guia-discapacidad-unicen" target="_blank">
                            <div className="button-text-white">Descargar Guía</div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fourth;



import React from 'react';
import { Button } from 'reactstrap';

function Eight() {

    return(
        <div className="global-eight-component">
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
                    <h1 className="disability-word-heavy">FÍSICO <span className="disability-word">/</span> MOTORA</h1>
                    <hr />
                </div>
                <div className="col-10">
                    <div>
                        <p className="pararaph">Una discapacidad física es aquella en la que se tienen
                            limitaciones en la ejecución de movimientos, sin importar
                            su desencadenante (cerebral, muscular, etc.).
                            Según la causa y el grado de la discapacidad, además de los
                            movimientos puede existir afectación de áreas como el
                            lenguaje o la manipulación de objetos.
                        </p>
                        <hr />
                    </div>
                    <div className="pt-3">
                        <Button className="btn button-color-yellow rounded-pill btn-shadow" href="http://extension.unicen.edu.ar/blog/wp-content/uploads/2020/09/guia.pdf" target="_blank">
                            <h5 className="button-text-dark">Descargar Guía</h5>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eight;









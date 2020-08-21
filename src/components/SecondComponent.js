import React from 'react';
import Fade from 'react-reveal/Fade';

function Second() {

    return(
        <div className="global-second-component">
            <div className="m-padding row justify-content-center">
                <div className="col-0">
                    <Fade right>
                        <div>
                            <h2 className="second-title">INCLUSIÓN <span className="span-title">de</span></h2>
                            <h2 className="second-title">ESTUDIANTES <span className="span-title">con</span></h2>
                            <h2 className="second-title">DISCAPACIDADES</h2>
                            <hr />
                        </div>
                    </Fade>
                </div>
                <div className="col-10">
                    <Fade right>
                        <div>
                            <p className="paragraph">Esta guía constituye un marco general, cuya
                                aplicación deberá ser necesariamente analizada en
                                función de la singularidad de los estudiantes, es
                                decir, de sus requerimientos o necesidades.
                                Cabe destacar, además, el carácter
                                complementario de las recomendaciones; en otras
                                palabras, no presentan un orden de jerarquía y
                                ninguna de ellas garantiza de manera absoluta a
                                accesibilidad académica. Su mayor potencial
                                radica en su articulación y sinergia según cada
                                situación particular.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Second;




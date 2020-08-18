import React from 'react';
import Fade from 'react-reveal/Fade';

function Second() {

    const divStyle = {
        height: '100vh',
        backgroundColor: '#21b590',
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        alignItems: 'center'
    };

    const h3Style = {
        fontWeight: "800",
        textAlign: "right",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        backgroundColor: "#0d0d0d",
        color: "white"
    };

    const mStyle = {
      paddingTop: "70px"
    };

    const spanStyle = {
        fontWeight: "700",
        color: "grey"
    };

    const centerStyle = {
        alignContent: "center",
        alignItems: "center"
    };

    const pStyle = {
        fontWeight: "500",
    };

    return(
        <div style={divStyle}>
            <div style={mStyle} className="row justify-content-center">
                <div className="col-0">
                    <Fade right>
                        <div>
                            <div style={centerStyle}>
                                <h2 style={h3Style}>INCLUSIÓN <span style={spanStyle}>de</span></h2>
                            </div>
                            <h2 style={h3Style}>ESTUDIANTES <span style={spanStyle}>con</span></h2>
                            <h2 style={h3Style}>DISCAPACIDADES</h2>
                            <hr />
                        </div>
                    </Fade>
                </div>
                <div className="col-10">
                    <Fade right>
                        <div>
                            <p style={pStyle} className="">Esta guía constituye un marco general, cuya
                                aplicación deberá ser necesariamente analizada en
                                función de la singularidad de los estudiantes, es
                                decir, de sus requerimientos o necesidades.
                                Cabe destacar, además, el carácter
                                complementario de las recomendaciones; en otras
                                palabras, no presentan un orden de jerarquía y
                                ninguna de ellas garantiza de manera absoluta a
                                accesibilidad académica. Su mayor potencial
                                radica en su articulación y sinergia según cada
                                situación particular.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Second;




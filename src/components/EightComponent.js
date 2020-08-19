import React from 'react';
import {Button} from "reactstrap";

function Eight() {

    const divStyle = {
        height: '100vh',
        color: '#1a1a1a',
        backgroundColor: '#44b0de',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const pStyle = {
        fontWeight: "500",
    };

    const wordStyle = {
        paddingTop: "20px",
        fontWeight: "500",
        textAlign: "right",
        color: "black",
        margin: "0 0 0 0",
    };

    const wordStyleBold = {
        fontWeight: "900",
        textAlign: "center",
        color: "black",
        margin: "0 0px 0 0",
        lineHeight: "1.1"
    };

    const stratStyle = {
        fontWeight: "300",
        textAlign: "center",
        color: "black",
        position: 'relative',
        marginRight: "60px",
        margin: "0 60px 0 0",
        lineHeight: "1.1"
    };

    const arrowStyle = {
        position: 'absolute',
        marginTop: '0%',
        marginLeft: '30%',
        height: '10vh',
        transform: 'translate(-50%,-88%)',
    };

    return(
        <div style={divStyle}>
            <div className="row justify-content-center">
                <div className="col-0">
                    <div className="col-12 container">
                        <h5 style={stratStyle}>ESTRATEGIAS DE</h5>
                        <h5 style={stratStyle}>INCLUSION PARA</h5>
                        <h5 style={stratStyle}>PERSONAS CON</h5>
                        <img className="" style={arrowStyle}
                             src={`${process.env.PUBLIC_URL}/assets/images/arrow_white.png`}
                             alt="FlechaBlanca"/>
                    </div>
                    <h1 style={wordStyle}>DISCAPACIDAD</h1>
                    <h1 style={wordStyleBold}>AUDITIVA</h1>
                    <hr />
                </div>
                <div className="col-10">
                    <div>
                        <p style={pStyle} className="">Una discapacidad física es aquella en la que se tienen
                            limitaciones en la ejecución de movimientos, sin importar
                            su desencadenante (cerebral, muscular, etc.).
                            Según la causa y el grado de la discapacidad, además de los
                            movimientos puede existir afectación de áreas como el
                            lenguaje o la manipulación de objetos.
                        </p>
                        <hr />
                    </div>
                    <div className="pt-3">
                        <Button color="secondary">Descargar Guía</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eight;









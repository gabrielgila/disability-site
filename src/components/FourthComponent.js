import React from 'react';
import { Button } from 'reactstrap';

function Fourth() {

    const divStyle = {
        height: '100vh',
        color: '#1a1a1a',
        backgroundColor: '#facd02',
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
                        <p style={pStyle} className="">Dentro de este colectivo se encuentran personas
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
                        <button className="btn btn-primary btn-round">
                            Descargar Guía
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fourth;



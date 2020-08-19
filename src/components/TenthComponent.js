import React from 'react';
import {Button} from "reactstrap";

function Tenth() {

    const divStyle = {
        height: '100vh',
        color: '#bfbfbf',
        backgroundColor: '#d72025',
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
        color: "#330000",
        margin: "0 0 0 0",
    };

    const wordStyleBold = {
        fontWeight: "900",
        textAlign: "center",
        color: "#330000",
        margin: "0 0px 0 0",
        lineHeight: "1.1"
    };

    const stratStyle = {
        fontWeight: "300",
        textAlign: "center",
        color: "#330000",
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
                    <h1 style={wordStyleBold}>VISCERAL</h1>
                    <hr />
                </div>
                <div className="col-10">
                    <div>
                        <p style={pStyle} className="">Una persona con discapacidad (PCD) visceral
                            presenta una alteración en la dinámica de las
                            funciones y estructuras corporales de los sistemas
                            cardiovascular, hematológica, inmunológica,
                            respiratoria, digestiva, metabólica, endocrina y
                            genitourinaria.
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

export default Tenth;





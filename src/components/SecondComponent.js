import React from 'react';
import Fade from 'react-reveal/Fade';

function Second() {

    const divStyle = {
        height: '100vh',
        backgroundColor: '#21b540',
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
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

    const h3Styleb = {
        fontWeight: "800",
        textAlign: "right",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingRight: "15px",
        backgroundColor: "#0d0d0d",
        color: "white"
    };

    const spanStyle = {
        fontWeight: "700",
        color: "grey"
    };

    const centerStyle = {
        alignContent: "center",
        alignItems: "center"
    };

    return(
        <div style={divStyle}>
            <div className="row">
                <div className="col-12">
                    <Fade right>
                        <div>
                            <div style={centerStyle}>
                                <h2 style={h3Styleb}>INCLUSIÓN <span style={spanStyle}>de</span></h2>
                            </div>
                            <h2 style={h3Style}>ESTUDIANTES <span style={spanStyle}>con</span></h2>
                            <h2 style={h3Style}>DISCAPACIDADES</h2>
                        </div>
                    </Fade>
                </div>

            </div>

        </div>
    );
}

export default Second;




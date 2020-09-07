import React from 'react';
import Fade from 'react-reveal/Fade';

function About(props) {
    return (
        <div className="justify-content-center">
            <Fade left>
                <div className="data-header col-12">
                    <h3 className="extra-title">ACERCA DE LA GUÍA</h3>
                </div>
                <div className="container justify-content-center">
                    <hr />
                    <p className="container paragraph text-justify">
                        Les damos la bienvenida a nuestra primera Guía con Recomendaciones
                        para la Inclusión.
                        La educación inclusiva es un concepto que se lleva a la práctica desde hace
                        poco tiempo. Habla de la accesibilidad arquitectónica para las personas
                        con discapacidad, pero también de cómo se accede a la información y
                        principalmente cómo se enseña y se aprende.
                        <br />
                        <br />
                        El Estado argentino ha tomado a la educación como un derecho y a la
                        educación inclusiva como norma de calidad. El verdadero cumplimiento
                        de un derecho se verifica en la universalidad de su ejercicio, en este
                        sentido es satisfactorio comprobar que las salas de estudio de las
                        universidades estén pobladas por una diversidad de estudiantes tal que
                        representa un desafío para el sistema universitario nacional.
                        <br />
                        <br />
                        El Área de Discapacidad de la Secretaría de Extensión de la Universidad
                        Nacional del Centro de la Provincia de Buenos Aires, desde donde se
                        coordina la Comisión sobre Discapacidad de la UNICEN, hace no poco
                        tiempo viene relevando la necesidad de apoyar el trabajo de docentes y
                        no docentes en la internalización del concepto y práctica de la educación
                        inclusiva con perspectiva de discapacidad.
                        <br />
                        <br />
                        Esto exige a la Universidad el desafío de plantear las medidas necesarias
                        para ser pertinente con la creación y difusión de conocimiento para todos.
                        Con este trasfondo es que nos damos el trabajo, como Comisión sobre
                        Discapacidad, de recoger experiencias exitosas de otras Universidades
                        Nacionales y nuestras propias experiencias, para listar un conjunto de
                        recomendaciones básicas que ayuden a los diversos actores involucrados
                        en el proceso de enseñanza y aprendizaje con inclusión.
                        <br />
                        <br />
                        Invitamos entonces a nuestra comunidad académica a explorar este
                        material, enviarnos sus comentarios, dudas y sugerencias para la mejora
                        continua; así como utilizarlo libremente con la finalidad de informar,
                        formar o como parte de campañas complementarias de concientización
                        en cada Facultad y espacio de la Universidad, con el interés último de
                        articular una red de trabajo mancomunado que nos permita seguir
                        generando mayores niveles de inclusión educativa de personas con
                        distintas discapacidades.
                        <br />
                        <br />
                    </p>

                    <hr />
                </div>
            </Fade>
        </div>
    );
}

export default About;

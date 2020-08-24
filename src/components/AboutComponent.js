import React from 'react';
import Fade from 'react-reveal/Fade';

function About(props) {
    return(
        <div className="justify-content-center">
            <Fade left>
                <div className="data-header col-12">
                    <h3 className="extra-title">RECOMENDACIONES</h3>
                </div>
                <hr />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-12 data-place">ACERCA DE</div>
                    </div>
                </div>
                <div className="container justify-content-center">
                    <hr />
                    <p className="container paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Donec massa sapien faucibus et molestie ac feugiat. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu. Viverra nam libero justo laoreet. Lectus urna duis convallis convallis. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Est velit egestas dui id ornare arcu odio ut sem. Augue eget arcu dictum varius duis at consectetur lorem. Ipsum a arcu cursus vitae congue. Mattis enim ut tellus elementum sagittis. Mollis aliquam ut porttitor leo a. Viverra nibh cras pulvinar mattis
                    </p>

                    <hr />
                </div>
            </Fade>
        </div>
    );
}

export default About;

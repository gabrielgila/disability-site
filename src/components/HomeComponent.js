import React, { useRef } from 'react'
import First from "./FirstComponent";
import Second from "./SecondComponent";
import Third from "./ThirdComponent";
import Fourth from "./FourthComponent";
import Fifth from "./FifthComponent";
import Sixth from "./SixthComponent";
import Seventh from "./SeventhComponent";
import Eight from "./EightComponent";
import Nineth from "./NinethComponent";
import Tenth from "./TenthComponent";
import Fade from 'react-reveal/Fade';
import { animateScroll as scroller } from 'react-scroll';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cursor: 1,
            max: 5,
            min: 1
        }
    }

    handleScroll = (e) => {
        console.log(e);
    }

    handleKeyDown = (e) => {

        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38) {
            this.setState({
                cursor: (this.state.cursor > this.state.min) ? this.state.cursor - 1 : this.state.min
            });
        } else if (e.keyCode === 40) {
            this.setState({
                cursor: (this.state.cursor < this.state.max) ? this.state.cursor + 1 : this.state.min
            });
        }
    }

    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll, { passive: true })

        window.addEventListener('keydown', this.handleKeyDown)

    }

    componentWillUnmount() {
        //window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className="row">
                {(this.state.cursor == 1) ?
                    <div className="row" name="first">
                        <Fade top>
                            <div className="col-sm-12 col-md-6" >
                                <First />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6">
                                <Second />
                            </div>
                        </Fade>
                    </div>
                    : null}
                {(this.state.cursor == 2) ?
                    <div className="row" name="second">
                        <Fade top>
                            <div className="col-sm-12 col-md-6">
                                <Third />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6">
                                <Fourth />
                            </div>
                        </Fade>
                    </div>
                    : null}
                {this.state.cursor == 3 ?
                    <div className="row" name="third">
                        <Fade top>
                            <div className="col-sm-12 col-md-6">
                                <Fifth />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6">
                                <Sixth />
                            </div>
                        </Fade>
                    </div>
                    : null}
                {this.state.cursor == 4 ?
                    <div className="row" name="fourth">

                        <Fade top>
                            <div className="col-sm-12 col-md-6">
                                <Seventh />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6">
                                <Eight />
                            </div>
                        </Fade>

                    </div>
                    : null}
                {this.state.cursor == 5 ?
                    <div className="row" name="fifth">


                        <Fade top>
                            <div className="col-sm-12 col-md-6">
                                <Nineth />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6">
                                <Tenth />
                            </div>
                        </Fade>
                    </div>
                    : null}

            </div>)
    }
}

export default Home;

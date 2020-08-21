import React from 'react'
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
import Dots from './DotsComponent';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cursor: 1,
            max: 5,
            min: 1,
            pc: true,
            swipping: false,
            isDesktop: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    };

    handleScroll = (e) => {
        if (!this.state.swipping) {
            this.setState({ swipping: true });
            if (e.deltaY < 0) {
                this.setState({
                    cursor: (this.state.cursor > this.state.min) ? this.state.cursor - 1 : this.state.min
                });
            } else if (e.deltaY > 0) {
                this.setState({
                    cursor: (this.state.cursor < this.state.max) ? this.state.cursor + 1 : this.state.max
                });
            }
            setTimeout(() => {
                this.setState({ swipping: false });
            }, 1000);
        }
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 38) {
            this.setState({
                cursor: (this.state.cursor > this.state.min) ? this.state.cursor - 1 : this.state.min
            });
        } else if (e.keyCode === 40) {
            this.setState({
                cursor: (this.state.cursor < this.state.max) ? this.state.cursor + 1 : this.state.max
            });
        }
    };

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        window.addEventListener('wheel', this.handleScroll, { passive: true });
        window.addEventListener('keydown', this.handleKeyDown);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    render() {

        const isDesktop = this.state.isDesktop;

        return (

            <div>
                {isDesktop ? (
                    <div>
                        <div className="row">
                            {(this.state.cursor === 1 || !this.state.pc) ?
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
                            {(this.state.cursor === 2 || !this.state.pc) ?
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
                            {(this.state.cursor === 3 || !this.state.pc) ?
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
                            {(this.state.cursor === 4 || !this.state.pc) ?
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
                            {(this.state.cursor === 5 || !this.state.pc) ?
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
                            <Dots selected={this.state.cursor} />
                        </div>
                    </div>
                ) : (<div>
                        <div className="Row">
                            <div>
                                <First />
                            </div>
                            <div className="col-12" >
                                <Second />
                            </div>
                            <div className="col-12" >
                                <Third />
                            </div>
                            <div className="col-12" >
                                <Fourth />
                            </div>
                            <div className="col-12" >
                                <Fifth />
                            </div>
                            <div className="col-12" >
                                <Sixth />
                            </div>
                            <div className="col-12" >
                                <Seventh />
                            </div>
                            <div className="col-12" >
                                <Eight />
                            </div>
                            <div className="col-12" >
                                <Nineth />
                            </div>
                            <div className="col-12" >
                                <Tenth/>
                            </div>
                        </div>
                    </div>)}
            </div>
        )
    }
}

export default Home;

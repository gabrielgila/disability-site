import React from 'react';
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

function Home() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-6" >
                <First />
            </div>
            <div className="col-sm-12 col-md-6">
                <Second />
            </div>
            <div className="col-sm-12 col-md-6">
                <Third />
            </div>
            <div className="col-sm-12 col-md-6">
                <Fourth />
            </div>
            <div className="col-sm-12 col-md-6">
                <Fifth />
            </div>
            <div className="col-sm-12 col-md-6">
                <Sixth />
            </div>
            <div className="col-sm-12 col-md-6">
                <Seventh />
            </div>
            <div className="col-sm-12 col-md-6">
                <Eight />
            </div>
            <div className="col-sm-12 col-md-6">
                <Nineth />
            </div>
            <div className="col-sm-12 col-md-6">
                <Tenth />
            </div>
        </div>
    )
}

export default Home;

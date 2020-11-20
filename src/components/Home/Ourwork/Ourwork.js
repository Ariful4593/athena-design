import React from 'react';
import group1 from '../../../image/Illustration/Group 65@2x.png';
import group2 from '../../../image/Illustration/Group 66@2x.png';
import group3 from '../../../image/Illustration/Group 69@2x.png';
import group4 from '../../../image/Illustration/Group 72@2x.png';
import './Ourwork.css'
const Ourwork = () => {
    return (
        <div className="container mw-100 mt-5 ourwork-container">
            <div className="text-center mt-5">
                <h1>What we do</h1>
                <small className="text-secondary">
                    Our main focus is to make the user experience very <br /> simple and easy. Simplicity is our Strength.
                </small>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3 text-center group mb-4 mt-4 mt-sm-4">
                        <div className="p-2 ">
                            <img src={group1} alt="" />
                            <h4 className="">Experience Design</h4>
                            <small>The point of using Lorem Ipsum is that it has a more or less normal</small>
                        </div>

                    </div>
                    <div className="col-md-3 text-center group mb-4 mt-4 mt-sm-4">
                        <div className="p-2 ">
                            <img src={group2} alt="" />
                            <h4 className="">Interface Design</h4>
                            <small>The point of using Lorem Ipsum is that it has a more or less normal</small>
                        </div>
                    </div>
                    <div className="col-md-3 text-center group mb-4 mt-4 mt-sm-4">
                        <div className="p-2 ">
                            <img src={group3} alt="" />
                            <h4 className="">Prototyping</h4>
                            <small>The point of using Lorem Ipsum is that it has a more or less normal</small>
                        </div>
                    </div>
                    <div className="col-md-3 text-center group mb-4 mt-4 mt-sm-4">
                        <div className="p-2 ">
                            <img src={group4} alt="" />
                            <h4 className="">Illustration</h4>
                            <small>The point of using Lorem Ipsum is that it has a more or less normal</small>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Ourwork;
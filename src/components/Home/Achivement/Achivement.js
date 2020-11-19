import React from 'react';
import happyImoji from '../../../image/Illustration/happy@2x.png';
import marketting from '../../../image/Illustration/marketing@2x.png';
import surface from '../../../image/Illustration/surface1@2x.png';
import transfortation from '../../../image/Illustration/transportation@2x.png';
import './Achivement.css'
const Achivement = () => {
    return (
        <div className="container achivement-container d-flex align-items-center mw-100">
            <div className="row w-100 d-flex align-items-center ml-4">
                <div className="col-md-5">
                    <h4>Our Achivement</h4>
                    
                    <small>It's a long established fact that a reader will be distracted by <br/> the readable content of a page when looking at it's layout. The <br/> point of using Lorem Ipsum is that it has a more-or-less normal <br/> distribution of letter</small>
                </div>
                <div className="col-md-7">
                    <div className="row w-100 ">
                        <div className="col-md-6 ">
                            <div className="row w-100 bg-secondary p-3 d-flex align-items-center happy shadow p-3 mb-5 bg-white" >
                                <div className="col-md-4">
                                    <img className="w-100" src={happyImoji} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h1>700+</h1>
                                    <p>Happy Client</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="row w-100 bg-secondary p-3 d-flex align-items-center happy marketting shadow p-3 mb-5 bg-white" >
                                <div className="col-md-4">
                                    <img className="w-100" src={marketting} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h1>140+</h1>
                                    <p>Project Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 mt-4">
                    <div className="col-md-6 ">
                            <div className="row w-100 bg-secondary p-3 d-flex align-items-center marketting shadow p-3 mb-5 bg-white" >
                                <div className="col-md-4">
                                    <img className="w-100" src={surface} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h1>25+</h1>
                                    <p>Crazy Minds</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="row w-100 bg-secondary p-3 d-flex align-items-center happy shadow p-3 mb-5 bg-white" >
                                <div className="col-md-4">
                                    <img className="w-100" src={transfortation} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <h1>75+</h1>
                                    <p>Running Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Achivement;
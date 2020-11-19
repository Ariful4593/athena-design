import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../../image/Illustration/20 [Converted]@2x.png';
import './RunnigProject.css'
const RunningProject = () => {
    return (
        <div className="container runningproject-container">
            <div className="row w-100">
                <div className="col-md-6">
                    <img className="w-100" src={projectImg} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                    <div className="p-5">
                        <h4 className="font-weight-bold">Stay Running & Project</h4>
                        <small className="text-secondary">It's a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter</small>

                        <br />
                        <br />
                        <Link className="p-2 text-white contact-btn" to="/">
                            Contact us
                        </Link>
                        {/* <button className="btn contact-btn font-weight-bold">Contact us</button> */}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default RunningProject;
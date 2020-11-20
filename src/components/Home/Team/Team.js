import React from 'react';
import './Team.css'
const Team = () => {
    return (
        <div className="container team-container mw-100">
            <h2 className="text-center">Choose Your Dedicated Team</h2>
            <div className="row team-row d-flex align-items-center">
                <div className="col-md-4 text-center ">
                    <div className="shadow  mb-5 bg-white rounded group-price">
                        <h1 className="text-secondary font-weight-bold">$199</h1>
                        <p className="text-secondary">For Basic</p>
                        <hr />
                        <ul>
                            <li>Homepage</li>
                            <li>No Inner Page</li>
                            <li>Asset File</li>
                            <li>Source File</li>
                            <li>Free Stock Photos</li>
                            <li>10 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>

                </div>
                <div className="col-md-4 text-center ">
                    <div className="shadow  mb-5 bg-white rounded group-price">
                        <h1 className="text-secondary font-weight-bold">$399</h1>
                        <p className="text-secondary">For Prefered</p>
                        <hr />
                        <ul>
                            <li>Homepage</li>
                            <li>4 Inner Page</li>
                            <li>Asset File</li>
                            <li>Source File</li>
                            <li>Free Stock Photos</li>
                            <li>20 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 text-center ">
                    <div className="shadow  mb-5 bg-white rounded group-price">
                        <h1 className="text-secondary font-weight-bold">$199</h1>
                        <p  className="text-secondary">For Basic</p>
                        <hr />
                        <ul>
                            <li>Homepage</li>
                            <li>8 Inner Page</li>
                            <li>Asset File</li>
                            <li>Source File</li>
                            <li>Free Stock Photos</li>
                            <li>30 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
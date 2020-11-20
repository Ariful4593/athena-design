import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../image/Illustration/16 [Converted]@2x.png';
import './MainHeader.css';
const MainHeader = () => {
    return (
        <div className="container mainheader-container mt-5 mt-sm-5 ">
            <div className="row main-header">
                <div className="col-md-6 d-flex align-items-center mb-5 mb-sm-0">
                    <div>
                        <h1 className="font-weight-bold display-3">Florence Agency</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. In nam alias excepturi eveniet natus error ratione
                  quia voluptas praesentium dolorum.</p>
                        <br />
                        <Link className="p-2 px-4 text-white see-btn" to="/">
                            See Pricing
                        </Link>
                    </div>
                </div>
                <div className="col-md-6  mb-5 mb-sm-0">
                    <img src={img1} className="w-100" alt="" />
                </div>
            </div>
        </div>

    );
};

export default MainHeader;
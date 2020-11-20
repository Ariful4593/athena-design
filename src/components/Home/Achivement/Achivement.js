import React from 'react';
import happyImoji from '../../../image/Illustration/happy@2x.png';
import marketting from '../../../image/Illustration/marketing@2x.png';
import surface from '../../../image/Illustration/surface1@2x.png';
import transfortation from '../../../image/Illustration/transportation@2x.png';
import './Achivement.css'
const Achivement = () => {
    return (
        <div className='achivement-container py-5'>
            <div className="container py-5 mw-100">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-5 mb-5 p-md-4 p-lg-5 p-xl-5">
                        <h4>Our Achivement</h4>
                        <p className="text-secondary">It's a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter</p>
                    </div>
                    <div className="col-md-7">
                        <div className="row justify-content-end">
                            <div className="col-12 col-sm-6 col-md-6 p-md-0 p-lg-0 pr-xl-0 pb-xl-0 pl-xl-4 pt-xl-4">
                                <div className="row bg-secondary mr-md-4 p-xl-4 mr-lg-4 mr-xl-3 mb-xl-0  mr-sm-2 mb-4 happy bg-white item-shadow " >
                                    <div className="col-4 col-sm-4 col-md-4 happy-img d-flex align-items-center">
                                        <img className="w-75 m-4 m-md-0" src={happyImoji} alt="" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8 p-md-0 p-lg-0 happy-content">
                                        <h1 className="font-weight-bold">700+</h1>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 p-md-0 p-lg-0  pt-xl-4 pb-xl-0 pl-xl-4 pr-xl-0 ">
                                <div className="row bg-secondary mr-md-4 p-xl-4 mr-lg-4 mr-xl-3 mb-xl-0  mr-sm-2 mb-4  bg-white marketting item-shadow" >
                                    <div className="col-4 col-sm-4 col-md-4 d-flex align-items-center">
                                        <img className="w-75 m-4 m-md-0" src={marketting} alt="" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8 p-md-0 p-lg-0">
                                        <h1 className="font-weight-bold">140+</h1>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 p-md-0 p-lg-0 pt-xl-4 pb-xl-0 pl-xl-4 pr-xl-0 ">
                                <div className="row bg-secondary mr-md-4 p-xl-4 mr-lg-4 mr-xl-3 mb-xl-0  mr-sm-2 mb-4  d-flex align-items-center marketting  bg-white item-shadow" >
                                    <div className="col-4 col-sm-4 col-md-4 d-flex align-items-center">
                                        <img className="w-75 m-4 m-md-0" src={surface} alt="" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8 p-md-0 p-lg-0">
                                        <h1 className="font-weight-bold">25+</h1>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 p-md-0 p-lg-0  pt-xl-4 pr-xl-0 pl-xl-4 pb-xl-0">
                                <div className="row bg-secondary mr-md-4 p-xl-4 mr-lg-4 mr-xl-3 mb-xl-0  mr-sm-2 mb-4  d-flex align-items-center happy item-shadow bg-white" >
                                    <div className="col-4 col-sm-4 col-md-4 d-flex align-items-center">
                                        <img className="w-75 m-4 m-md-0" src={transfortation} alt="" />
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8 p-md-0 p-lg-0">
                                        <h1 className="font-weight-bold">75+</h1>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivement;
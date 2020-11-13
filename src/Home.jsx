import React, { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import Navbar from './Navbar';
import Copy from './Copy';
import { NavLink } from 'react-router-dom';
const Home = (props) => {
    const click = () => alert('Thank You Sir !....');
    return (
    <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
            <Navbar />
            <div className="row hero d-flex justify-content-center align-items-center py-5">
                <div className="col-lg-6 mt-lg-0 mt-5 text-lg-left text-center order-lg-1 order-2 col-12">
                <h1>
                    {props.name}
                    <strong className="brand-name">
                    {" "}
                    ShocchoSolutions{" "}
                    </strong>
                </h1>
                <p className="my-4">
                    We are the team of talented
                    developer making websites
                </p>
                <NavLink
                    className="btn"
                    onClick={click}
                    to="/Service"
                >
                    {props.btn}
                </NavLink>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 col-12 ">
                <div>
                    <img
                    src={props.src}
                    className="img-fluid hero_img"
                    alt="randomimg"
                    />
                </div>
                </div>
            </div>
            <Copy />
            </div>
        </div>
        </div>
    </>
    );
}
export default Home;
import React from 'react';
import Navbar from './Navbar';
import Head from './Head';
import From from './From';
import Copy from "./Copy";
const Contact = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Navbar />
              <Head head="Contact Us" />
              <From />
            </div>
          </div>
          <Copy />
        </div>
      </>
    );
}
export default Contact;
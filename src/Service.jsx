import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Info from './Info';
import Head from './Head';
import Copy from "./Copy";
const mc = Info.map((value, key) => {
    return (
        <div className="col-md-4 col-12" key={key}>
            <Card srcc={value.img} title={value.title} desc={value.Desc} />
        </div>
    );
})
const Service = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Navbar />
              <Head head="Our Services" />
              <div className="row mt-4 mb-3">{mc}</div>
            </div>
          </div>
          <Copy />
        </div>
      </>
    );
}
export default Service;
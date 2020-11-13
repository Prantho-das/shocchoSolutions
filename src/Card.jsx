import React from "react";
const SS = "https://web.facebook.com/Shoccho-Solutions-101496728190928/";
// const link = "https://github.com/Prantho-das/shocchoSolutions.git";
function Card(props) {
  return (
    <div className="card mb-3">
      <img className="card-img-top img" src={props.srcc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a href={SS} target="" className="btn">
          Check Now
        </a>
      </div>
    </div>
  );
}
export default Card;

import React from "react";
import "./Card.css";

export const Card = ({data}) => {
  // return (
  //   <div style={{background: data.color}} className="card">
  //     <p className="text">{data.title}</p>
  //   </div>
  // );
  if(data.color){
    return <div style={{background: data.color}} className="card">
         <p className="text">{data.title}</p>
       </div>
  }else{
    return <div style={{backgroundImage: `url(${data.img})`}} className="card">
         <p className="text">{data.title}</p>
       </div>
  }
};

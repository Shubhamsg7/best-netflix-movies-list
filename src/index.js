import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";


ReactDOM.render(
  <>
  <h1 className="heading">Netflix Best Movies Collections</h1>
  <div className="cards">
  {Sdata.map((val, index) => {
    console.log(index);
    return(
  <Card 
    imgsrc = {val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
    );
  })}
  
  </div>
</>,
  document.getElementById('root')
)
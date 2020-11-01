import React from 'react';
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";


const App = () =>(
  <>
  <h1 className="heading">Netflix Best Movies Collections</h1>
  <div className="cards">
  {Sdata.map((val, index) => {
    console.log(index);
    return(
  <Card 
    key = {val.id}
    imgsrc = {val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
    );
  })}
  
  </div>
</>
)

export default App;
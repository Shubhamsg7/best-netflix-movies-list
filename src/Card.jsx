import React from "react";
import Heading from "./Heading";
import Image from "./Image";

function Card(props){
    console.log(props);
    return (
        <>
                <div className="card">
                    <Image imgsrc={props.imgsrc} />
                    <div className="card__info">
                        <span className="card__category"><small>{props.title}</small></span>
                        <Heading sname={props.sname} />
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
        </>
    );
}

export default Card;
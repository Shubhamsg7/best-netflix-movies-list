import React from "react";

function Card(props){
    console.log(props);
    return (
        <>
                <div className="card">
                    <img src={props.imgsrc} alt="movie1" className="card__img"/>
                    <div className="card__info">
                        <span className="card__category"><small>{props.title}</small></span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
        </>
    );
}

export default Card;
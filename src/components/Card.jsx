import React from "react";
import Details from "./Details";
import Profile from "./Profile";

function Card (props) {
    return <div>
        
        <div className="card">
            <div className="top">
                <h2 className = "name">{props.name}</h2>
                <Profile pic = {props.img} />
            </div>
        
            <div className="bottom info" >
                <Details info = {props.phoneNumber} />
                <Details info = {props.email} />
            </div>
      </div>
    </div>
}

export default Card
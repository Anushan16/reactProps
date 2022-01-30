import React from "react";
import { isPropertySignature } from "typescript";
import Details from "./Details";
import Profile from "./Profile";
import Id from "./Id";

function Card (props) {

    
    return <div>
        
        <div className="card">
            <div className="top">
                <Id id = {props.identifier} />
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
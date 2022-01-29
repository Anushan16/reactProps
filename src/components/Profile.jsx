import React from "react";

function Profile (props) {
    return <div>
    <img className = "circle-img"
            src={props.pic}
            alt="avatar_img"
          />

    </div>
}

export default Profile
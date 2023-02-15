import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="cover" />
        <img src={Profile} alt="profile" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>4.297</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1.627</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>Visualizar Perfil</span>
    </div>
  );
};

export default ProfileCard;

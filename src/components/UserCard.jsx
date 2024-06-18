import React from "react";
import "../styles/users.css";
const UserCard = ({ featuredUsers }) => {
  return (
    <div className="user-card">
      <div className="img-container">
        <img
          className="avatar"
          src={featuredUsers?.profile?.profilePic}
          alt="avatar"
        />
      </div>
      <div className="info-container">
        <h3 className="name">
          <span className="point-head">Name: </span>{" "}
          {featuredUsers?.profile?.firstName}
          {featuredUsers?.profile?.lastName}
        </h3>
        <h4>
          <span className="point-head">Job Title: </span>
          {featuredUsers?.profile?.jobTitle}
        </h4>
        <h4>
          <span className="point-head">Email: </span>
          {featuredUsers?.profile?.email}
        </h4>
        <h4>
          <span className="point-head">Phone: </span>
          {featuredUsers?.profile?.phone}
        </h4>
      </div>
    </div>
  );
};

export default UserCard;

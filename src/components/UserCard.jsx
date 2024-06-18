import React from "react";
import "../styles/users.css";
const UserCard = ({ profile }) => {
  //   console.log(profile);
  const { profilePic, firstName, lastName, jobTitle, email, phone } = profile;
  return (
    <div className="user-card">
      <div className="img-container">
        <img className="avatar" src={profilePic} alt="avatar" />
      </div>
      <div className="info-container">
        <h3>
          <span className="point-head">Name: </span> {firstName}
          {lastName}
        </h3>
        <h4>
          <span className="point-head">Job Title: </span>
          {jobTitle || "N/A"}
        </h4>
        <h4>
          <span className="point-head">Email: </span>
          {email}
        </h4>
        <h4>
          <span className="point-head">Phone: </span>
          {phone}
        </h4>
      </div>
    </div>
  );
};

export default UserCard;

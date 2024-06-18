import React from "react";
import useUsersInfo from "../hooks/useUsersInfo";
import { UserCard } from "../components";
import spinner from "../assets/spinner.svg";

const UsersInfoPage = () => {
  const { featuredUsers, userGroups, isLoading } = useUsersInfo();

  return (
    <div className="user-container">
      {isLoading && <img className="spinner" src={spinner} alt="Loader" />}
      {featuredUsers && userGroups && !isLoading && (
        <>
          <div className="featured-users">
            {featuredUsers?.map((user) => (
              <UserCard key={user?._id} profile={user?.profile} />
            ))}
          </div>
          <hr />
          <div className="user-groups">
            {userGroups?.map((user) => (
              <UserCard key={user?._id} profile={user?.profile} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UsersInfoPage;

import React from "react";
import useUsersInfo from "../hooks/useUsersInfo";
import { UserCard } from "../components";

const UsersInfoPage = () => {
  const { featuredUsers, userGroups, isLoading } = useUsersInfo();
  console.log(featuredUsers);
  // console.log(userGroups);

  return (
    <div className="user-container">
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
    </div>
  );
};

export default UsersInfoPage;

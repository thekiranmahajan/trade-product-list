import React from "react";
import useUsersInfo from "../hooks/useUsersInfo";
import { UserCard } from "../components";

const UsersInfoPage = () => {
  const { featuredUsers, userGroups, isLoading } = useUsersInfo();
  console.log(featuredUsers);
  // console.log(userGroups);

  return (
    <div className="user-container">
      {featuredUsers?.map((user) => (
        <UserCard key={user?._id} profile={user?.profile} />
      ))}
      {userGroups?.map((user) => (
        <UserCard key={user?._id} profile={user?.profile} />
      ))}
    </div>
  );
};

export default UsersInfoPage;

import React from "react";
import useUsersInfo from "../hooks/useUsersInfo";
import { UserCard } from "../components";

const UsersInfoPage = () => {
  const { featuredUsers, userGroups, isLoading } = useUsersInfo();
  console.log(featuredUsers);
  // console.log(userGroups);

  return (
    <div className="card-container">
      {featuredUsers && <UserCard featuredUsers={featuredUsers[0]} />}
    </div>
  );
};

export default UsersInfoPage;

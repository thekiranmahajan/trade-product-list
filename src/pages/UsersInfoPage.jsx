import React from "react";
import useUsersInfo from "../hooks/useUsersInfo";

const UsersInfoPage = () => {
  const [featuredUsers, userGroups] = useUsersInfo();
  console.log(featuredUsers);
  console.log(userGroups);

  return <div></div>;
};

export default UsersInfoPage;

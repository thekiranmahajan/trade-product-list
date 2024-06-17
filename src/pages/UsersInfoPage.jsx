import React from "react";
import useUsersInfo from "../hooks/useUsersInfo";

const UsersInfoPage = () => {
  const users = useUsersInfo();
  return <div>UserInfoPage</div>;
};

export default UsersInfoPage;

import { useEffect, useState } from "react";
import { API_OPTIONS, FEATURED_USERS_API } from "../utils/constant";

const useUsersInfo = () => {
  const [featuredUsers, setFeaturedUsers] = useState();
  useEffect(() => {
    fetchFeaturedUsers();
  }, []);

  const fetchFeaturedUsers = async () => {
    const response = await fetch(FEATURED_USERS_API, API_OPTIONS);
    const data = await response.json();
    console.log(data);
    setFeaturedUsers(data);
  };
};

export default useUsersInfo;

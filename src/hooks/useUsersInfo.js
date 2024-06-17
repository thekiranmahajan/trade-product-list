import { useEffect, useState } from "react";
import {
  API_OPTIONS,
  FEATURED_USERS_API,
  USERS_GROUPS_API,
} from "../utils/constant";

const useUsersInfo = () => {
  const [featuredUsers, setFeaturedUsers] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFeaturedUsers = async () => {
    const response = await fetch(FEATURED_USERS_API, API_OPTIONS);
    const data = await response.json();
    console.log(data);
    return data.data;
  };
  const fetchUserGroups = async () => {
    const response = await fetch(USERS_GROUPS_API, API_OPTIONS);
    const data = await response.json();
    console.log(data);
    return data.data;
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const [featUsers, userGroups] = await Promise.all([
        fetchFeaturedUsers(),
        fetchUserGroups(),
      ]);
      setFeaturedUsers(featUsers);
      setUserGroups(userGroups);
    } catch (error) {
      console.log(
        "something went wrong either while fetching featuredUsers or userGroups",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return { featuredUsers, userGroups, isLoading };
};

export default useUsersInfo;

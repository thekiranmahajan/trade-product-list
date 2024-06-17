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
    if (!response.ok) {
      throw new Error("Failed to fetch featured users");
    }
    const data = await response.json();
    console.log("Featured Users:", data);
    return data.data;
  };

  const fetchUserGroups = async () => {
    const response = await fetch(USERS_GROUPS_API, API_OPTIONS);
    if (!response.ok) {
      throw new Error("Failed to fetch user groups");
    }
    const data = await response.json();
    console.log("User Groups:", data);
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
      console.error("Error fetching data:", error);
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

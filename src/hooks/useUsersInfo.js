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

  const fetchFeaturedUsers = async (signal) => {
    const response = await fetch(FEATURED_USERS_API, {
      ...API_OPTIONS,
      signal,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch featured users");
    }
    const data = await response.json();
    console.log("Featured Users:", data);
    return data.data;
  };

  const fetchUserGroups = async (signal) => {
    const response = await fetch(USERS_GROUPS_API, { ...API_OPTIONS, signal });
    if (!response.ok) {
      throw new Error("Failed to fetch user groups");
    }
    const data = await response.json();
    console.log("User Groups:", data);
    return data.data;
  };

  const fetchUsers = async (signal) => {
    setIsLoading(true);
    try {
      const [featUsers, userGroups] = await Promise.all([
        fetchFeaturedUsers(signal),
        fetchUserGroups(signal),
      ]);
      if (!signal.aborted) {
        setFeaturedUsers(featUsers);
        setUserGroups(userGroups);
        setIsLoading(false);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchUsers(signal);

    return () => {
      controller.abort();
    };
  }, []);

  return { featuredUsers, userGroups, isLoading };
};

export default useUsersInfo;

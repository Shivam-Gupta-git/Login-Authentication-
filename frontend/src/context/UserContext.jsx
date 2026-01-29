import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const backend_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  const navigate = useNavigate();
  const [profileBoxOpen, setProfileBoxOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    navigate,
    backend_URL,
    profileBoxOpen,
    setProfileBoxOpen,
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;

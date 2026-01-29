import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const backend_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  const navigate = useNavigate();
  const [profileBoxOpen, setProfileBoxOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

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

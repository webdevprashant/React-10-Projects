import { useContext } from "react";
import { AuthContext } from "../src/provider/AuthProvider";

const useAuth = () => {
  const { token, user, login, logout } = useContext(AuthContext);
  return { token, user, login, logout };
};

export default useAuth;
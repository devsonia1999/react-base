import AuthLogic from "@/auth/authLogic";
import app from "@/lib/firebase";
import { createContext } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const authLogic = new AuthLogic(app)

  return (
    <AuthContext.Provider value={authLogic}>
      {children}
    </AuthContext.Provider>
  )
}
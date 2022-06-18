import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const reducer = (state, actions) => {
  switch (actions.type) {
    case "LOGIN_SUCESS":
      return { ...state, isAuth: true };
    case "LOGOUT_SUCESS":
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
export const AuthContextProviderWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isAuth: false });
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

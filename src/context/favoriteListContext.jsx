import { createContext, useReducer } from "react";

const initialState = localStorage.getItem("fav-list")
  ? JSON.parse(localStorage.getItem("fav-list"))
  : [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.payload];
      localStorage.setItem("fav-list", JSON.stringify(state));
      return state;
      break;
    case "REMOVE":
      state = state.filter((item) => item !== action.payload);
      localStorage.setItem("fav-list", JSON.stringify(state));
      return state;

      break;
    default:
      break;
  }
};

const favoriteListContext = createContext();

const FavoriteListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <favoriteListContext.Provider value={{ state, dispatch }}>
      {children}
    </favoriteListContext.Provider>
  );
};

export { favoriteListContext, FavoriteListProvider };

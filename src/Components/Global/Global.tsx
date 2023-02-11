import React, {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";

interface user {
  name: string;
  email: string;
  _id: string;
}

interface userData {
  userDetails: boolean;
  toggleShow: () => void;

  currentUser: user;
  setCurrentUser: React.Dispatch<React.SetStateAction<user>>;
  readID: string;
  setReadID: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<userData>({
  userDetails: false,
  toggleShow: () => {},
  currentUser: {
    name: "",
    email: "",
    _id: "",
  },
  setCurrentUser: (currentUser: {}) => {},
  readID: "",
  setReadID: () => {},
});

export const MainContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [userDetails, setUserDetails] = useState(false);
  const [currentUser, setCurrentUser] = useState({} as user);
  const [readID, setReadID] = useState("");

  const toggleShow = () => {
    setUserDetails(!userDetails);
  };
  useEffect(() => {
    if (window.localStorage.getItem("userData")) {
      const myData = JSON.parse(window.localStorage.getItem("userData") || "");

      setCurrentUser(myData);
    }
  });

  return (
    <GlobalContext.Provider
      value={{
        userDetails,
        toggleShow,
        currentUser,
        setCurrentUser,
        readID,
        setReadID,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, {useState, useContext} from 'react';

const AppContext = React.createContext();

export const AppContextProvider = ({
  children
}) => {
  const [state, setState] = useState({
    auth: {
      user: null
    }
  });

  return <AppContext.Provider value={{
    state,
    setState
  }}>
    {children}
  </AppContext.Provider>
};

export const useAppContext = () => {
  const {
    state,
    setState
  } = useContext(AppContext);

  return [state, setState];
};

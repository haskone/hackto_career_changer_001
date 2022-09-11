import React, {useState, useContext, useEffect} from 'react';

const AppContext = React.createContext();

let authenticatedUser = null;

if (window.localStorage) {
  const user = window.localStorage.getItem('authenticatedUser');

  if (user) {
    authenticatedUser = JSON.parse(
      window.localStorage.getItem('authenticatedUser')
    );
  }
}

export const AppContextProvider = ({
  children
}) => {
  
  const [state, setState] = useState({
    auth: {
      user: authenticatedUser
    }
  });

  useEffect(() => {
    if (window.localStorage) {
      if (state.auth.user) {
        window.localStorage.setItem(
          'authenticatedUser',
          JSON.stringify(state.auth.user)
        );
      } else {
        window.localStorage.removeItem('authenticatedUser');
      }
    }
  }, [state.auth.user]);

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

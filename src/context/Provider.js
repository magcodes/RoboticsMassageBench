import React, {createContext, useReducer} from 'react';
import authInitialState from './initialsStates/authInitialState';
import massageesInitialState from './initialsStates/massageesInitialState';
import massagees from './reducers/massagees';
import auth from './reducers/auth';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [massageesState, massageesDispatch] = useReducer(massagees, massageesInitialState);

    return <GlobalContext.Provider value = {{
        authState, massageesState, authDispatch, massageesDispatch 
    }}>
        {children}
    </GlobalContext.Provider>;
}
// const GlobalProvider = ({children}) => {
//   const [authState, authDispatch] = useReducer(auth, authInitialState);
//   const [massageesState, massageesDispatch] = useReducer(massagees, massageesInitialState);

//   return (
//     <GlobalContext.Provider
//       value={{authState, massageesState, authDispatch, massageesDispatch}}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

export default GlobalProvider;

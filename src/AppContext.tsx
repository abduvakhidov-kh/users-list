import {Dispatch, SetStateAction, useState, createContext} from "react"

export interface IProviderProps {
  children?: any;
}

type AppContextState = { sortBy: string; }
// omitting additional array wrapped around context value

type AppContextValue = {
  state: AppContextState;
  // type, you get when hovering over `setState` from `useState`
  setState: Dispatch<SetStateAction<AppContextState>>;
};

const appCtxDefaultValue: AppContextValue = {
  state: {sortBy: "all"},
  setState: state => {
  } // noop default callback
};

export const AppContext = createContext(appCtxDefaultValue);

export const AppProvider = (props: IProviderProps) => {
  const [state, setState] = useState(appCtxDefaultValue.state);

  return (
    <AppContext.Provider value={{state, setState}}>
      {props.children}
    </AppContext.Provider>
  );
};



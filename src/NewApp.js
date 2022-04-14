import { useReducer, createContext } from "react";
import SecondaryComponent from "./SecondaryComponent";

export const DataContext = createContext();

const reducer = (state, action) => {
  const { type, value } = action;
  if (type === "increase") {
    return { counter: parseInt(state.counter) + parseInt(value) };
  } else if (type === "decrease") {
    return { counter: parseInt(state.counter) - parseInt(value) };
  }
  return state;
};

const NewApp = () => {
  const initialValue = {
    counter: 0
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div>
        <h1> Counter value is {state.counter} </h1>
        <SecondaryComponent />
      </div>
      ;
    </DataContext.Provider>
  );
};

export default NewApp;

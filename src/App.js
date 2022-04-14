import "./styles.css";
import { useContext, createContext, useState } from "react";
import DisplayCars123 from "./DisplayCars";

export const DataContext = createContext();

export default function App() {
  const [state, setState] = useState({
    data: [
      {
        id: 1,
        car: "Nexon",
        brand: "Tata"
      },
      {
        id: 2,
        car: "Punch",
        brand: "Tata"
      },
      {
        id: 3,
        car: "Harrier",
        brand: "Tata"
      },
      {
        id: 4,
        car: "Verna",
        brand: "Hyundai"
      },
      {
        id: 5,
        car: "Swift",
        brand: "Maruti"
      }
    ]
  });

  const handleSubmit = (val) => {
    // change state value
    const newState = {
      ...state,
      data: [...state.data]
    };
    newState.data.pop();
    setState(newState);
  };

  return (
    <DataContext.Provider
      value={{
        cars: state.data,
        action: handleSubmit
      }}
    >
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <DisplayCars123 />
    </DataContext.Provider>
  );
}

const CarInfo = () => {
  const data = useContext(DataContext);
  console.log("Car Info", data);
  return <div> Car Info </div>;
};

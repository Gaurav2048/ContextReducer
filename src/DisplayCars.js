import { useContext } from "react";
import { DataContext } from "./App";

const DisplayCars = () => {
  const data = useContext(DataContext);
  console.log("From child in other file", data);

  return (
    <div>
      Display cars from other file
      {data.cars.map((car) => (
        <div
          style={{
            borderBottom: "1px solid #cbcbcb"
          }}
        >
          {JSON.stringify(car, null, 2)}
        </div>
      ))}
      <button onClick={() => data.action("Called")}> Handle Submit </button>
    </div>
  );
};

export default DisplayCars;

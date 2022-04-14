import { useContext, useState } from "react";
import { DataContext } from "./NewApp";

const SecondaryComponent = () => {
  const { dispatch } = useContext(DataContext);
  const [number, setNumber] = useState(0);
  return (
    <>
      <h4>Secondary Actions</h4>
      <input
        placeholder="Add number by which you want to change"
        value={number}
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch({
            type: "increase",
            value: number
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrease",
            value: number
          })
        }
      >
        {" "}
        Decrement{" "}
      </button>
    </>
  );
};

export default SecondaryComponent;

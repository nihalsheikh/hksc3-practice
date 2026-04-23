import { useContext } from "react";
import { CountContext } from "../context";

const Button = ({ setCount }) => {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase +</button>
      <button onClick={() => setCount(count - 1)}>Decrease -</button>
    </div>
  );
};

export default Button;

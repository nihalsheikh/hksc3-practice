import { useContext } from "react";
import { CountContext } from "../context";

const CountRenderer = () => {
  const count = useContext(CountContext);
  return <div>Count: {count}</div>;
};

export default CountRenderer;

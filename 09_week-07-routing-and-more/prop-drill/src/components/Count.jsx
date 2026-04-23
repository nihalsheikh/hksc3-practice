import CountRenderer from "./CountRenderer";
import Button from "./Button";

const Count = ({ count, setCount }) => {
  return (
    <div>
      <CountRenderer count={count} />
      <Button count={count} setCount={setCount} />
    </div>
  );
};

export default Count;

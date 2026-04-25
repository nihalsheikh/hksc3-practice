import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atom/count";

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);

  return (
    <>
      <div>
        <h1 className="center">Count: {count}</h1>
      </div>
    </>
  );
};

export default CountRenderer;

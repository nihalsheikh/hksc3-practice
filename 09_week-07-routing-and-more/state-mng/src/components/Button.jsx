import { countAtom } from "../store/atom/count";
import { useSetRecoilState } from "recoil";

const Button = () => {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div className="center">
      <button
        className="counterBtn"
        onClick={() => setCount((count) => count + 1)}
      >
        Increase [ + ]
      </button>
      <button
        className="counterBtn"
        onClick={() => setCount((count) => count - 1)}
      >
        Decrease [ - ]
      </button>
    </div>
  );
};

export default Button;

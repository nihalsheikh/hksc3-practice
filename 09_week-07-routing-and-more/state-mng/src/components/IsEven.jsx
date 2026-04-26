import { evenSelector } from "../store/atom/count";
import { useRecoilValue } from "recoil";

const IsEven = () => {
  const isEvenCount = useRecoilValue(evenSelector);
  return (
    <div className="center">
      {isEvenCount % 2 === 0 ? <p>It is EVEN</p> : null}
    </div>
  );
};

export default IsEven;

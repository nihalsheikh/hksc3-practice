import { countAtom } from "../store/atom/count";
import { useRecoilValue } from "recoil";

const IsEven = () => {
  const count = useRecoilValue(countAtom);
  return <div>{count % 2 === 0 ? <p>It is EVEN</p> : <></>}</div>;
};

export default IsEven;

import "./App.css";
import Count from "./components/Count";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

export default App;

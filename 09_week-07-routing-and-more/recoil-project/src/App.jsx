import { RecoilRoot } from "recoil";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <div>
      <h1>Recoil Practice App</h1>

      <RecoilRoot>
        <Topbar />
      </RecoilRoot>
    </div>
  );
};

export default App;

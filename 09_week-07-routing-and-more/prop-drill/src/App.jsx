import { useState } from "react";
import Count from "./components/Count";
import { CountContext } from "./context";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

export default App;

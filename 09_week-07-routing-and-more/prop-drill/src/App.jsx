import { useState } from "react";
import Count from "./components/Count";
import { CountContext } from "./context";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* To pass multiple props, send an object in value={{count, setCount}} */}
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

export default App;

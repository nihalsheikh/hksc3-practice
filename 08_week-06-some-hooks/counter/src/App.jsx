import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0); // for input from user
  const [counter, setCounter] = useState(0); //for counter

  // const calcSumOfN = (number) => {
  //   const sum = (number * (number + 1)) / 2;
  //   setSum(sum);
  // };

  let count = useMemo(() => {
    let num = 0;
    for (let i = 1; i <= number; i++) {
      num = num + i;
    }
    return num;
  }, [number]);

  // const handleCalcSum = (e) => {
  //   const val = Number(e.target.value);
  //   setNumber(val);
  //   setSum((val * (val + 1)) / 2);
  // };

  return (
    <div>
      <h1>Counter App</h1>

      <div>
        <input placeholder="Enter a number" onChange={(e) => setNumber(e.target.value)} />
        <br />
        <p>
          The sum from 1 to {number} is: {count}
        </p>
        {/* <button onClick={() => calcSumOfN(number)}>Calculate Sum</button>*/}
      </div>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
    </div>
  );
};

export default App;

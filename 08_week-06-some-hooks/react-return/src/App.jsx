import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [header1, setHeader1] = useState("This is John Doe");
  const [header2, setHeader2] = useState("This is Tony Stark");

  const generateRandomNum1 = () => {
    setHeader1(`This is ${Math.floor(Math.random() * 10)}`);
  };

  const generateRandomNum2 = () => {
    setHeader2(`This is ${Math.floor(Math.random() * 10)}`);
  };

  return (
    <>
      <Header title={header1} />
      <button onClick={generateRandomNum1}>Change name to num</button>
      <br />
      <Header title={header2} />
      <button onClick={generateRandomNum2}>Change name to num</button>
    </>
  );
}

export default App;

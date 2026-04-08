import { useState } from "react";
import Header from "./Header";

const Header2 = () => {
  const [header, setHeader] = useState("This is Harry");

  const updateHeader = () => {
    setHeader(`This is ${Math.floor(Math.random() * 10)}`);
  };

  return (
    <>
      <button onClick={updateHeader}>Click me to change Header2</button>
      <Header title={header} />
    </>
  );
};

export default Header2;

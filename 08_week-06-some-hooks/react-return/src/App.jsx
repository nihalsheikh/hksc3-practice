import { useEffect } from "react";
// import CardWrapper from "./components/CardWrapper";
// import TextComponent from "./components/TextComponent";
// import TextComponent2 from "./components/TextComponent2";

function App() {
  useEffect(() => {
    alert("Hi");
  }, []);

  return (
    <>
      {/* <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <TextComponent2 />
      </CardWrapper> */}
      <div>home</div>
    </>
  );
}

export default App;

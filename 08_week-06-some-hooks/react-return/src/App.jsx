import CardWrapper from "./components/CardWrapper";
import TextComponent from "./components/TextComponent";
import TextComponent2 from "./components/TextComponent2";

function App() {
  return (
    <>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <TextComponent2 />
      </CardWrapper>
    </>
  );
}

export default App;

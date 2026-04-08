import Header from "./components/Header";
import Header2 from "./components/Header2";
import HeaderMemo from "./components/HeaderMemo";

function App() {
  return (
    <>
      <Header title="This is Luffy" />
      <br />
      <br />
      <Header2 />
      <br />
      <br />
      <Header title="This is Zoro" />
      <br />
      <br />
      <HeaderMemo title="This is Strawhat Crew" />
    </>
  );
}

export default App;

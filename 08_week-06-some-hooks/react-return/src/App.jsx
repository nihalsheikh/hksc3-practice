import Header from "./components/Header";

function App() {
  const header = "This is a Header";
  return (
    <div>
      <Header title={header} />
      <Header title={"Another Heading"} />
    </div>
  );
}

export default App;

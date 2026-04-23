import { useNavigate } from "react-router-dom";

const RouteBtns = () => {
  // This navigate, works inside the BrowserRouter only, so make a component and use this inisde it
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Landing Page</button>
        <button onClick={() => navigate("/dashboard")}>Dashbaord</button>
      </div>
    </>
  );
};

export default RouteBtns;

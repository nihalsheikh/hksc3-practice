import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Landing from "./components/Landing.jsx";
// import Dashboard from "./components/Dashboard.jsx";

import RouteBtns from "./components/RouteBtns.jsx";

// Lazy Loading
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const Landing = lazy(() => import("./components/Landing.jsx"));

const App = () => {
  return (
    <>
      <nav
        style={{
          background: "black",
          color: "white",
          padding: "4px",
          alignItems: "center",
        }}
      >
        This is navbar
      </nav>

      <BrowserRouter>
        {/* You need to make a component of useNavigate and then add it in BrowserRouter */}
        <RouteBtns />
        <Routes>
          <Route
            path="/dashboard"
            element={
              // we use Suspense API when loading an Asynchronous Component or Data Fetching
              <Suspense fallback={"Loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

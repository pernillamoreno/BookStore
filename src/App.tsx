import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
      {/* <nav
        style={{
          width: 200,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/list">Books</NavLink>
        <NavLink to="/add">Bookadd</NavLink>
      </nav>*/}
      <Routes>
        <Route path="/" element={<>Home</>}></Route>
        <Route path="/list" element={<>Books</>}></Route>
        <Route path="/add" element={<>Bookadd</>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

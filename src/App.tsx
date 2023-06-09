import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";
import UserList from "./app/module/User/UserList";
import UserForm from "./app/module/User/UserForm";

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/list" element={<>Books</>}></Route>
        <Route path="/add" element={<UserForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

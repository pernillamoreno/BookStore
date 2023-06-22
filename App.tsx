import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";

import AdminUserList from "./app/module/AdminUserFolder/AdminUserList";
import UserForm from "./app/module/AdminUserFolder/UserForm";
import BookList from "./app/module/AdminUserFolder/BookList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<AdminUserList />}></Route>
          <Route path="/add" element={<UserForm />}></Route>
          <Route
            path="/edit/:id"
            element={<UserForm isEditForm={true} />}
          ></Route>
          <Route path="/list" element={<BookList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

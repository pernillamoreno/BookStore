/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This for a file is a App.tsx file. This file is a route controller to outher files.
 *
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";

import AdminUserList from "./app/module/AdminUserFolder/AdminUserList";
import UserForm from "./app/module/AdminUserFolder/UserForm";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

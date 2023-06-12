/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This for a file is a App.tsx file. This file is a route controller to outher files.
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";
import AdminUserList from "./app/module/AdminFolder/AdminUserList";
import AdminForm from "./app/module/AdminFolder/AdminForm";
import BookList from "./app/module/AdminFolder/BookAdminSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<AdminUserList />}></Route>
          <Route path="/list" element={<BookList />}></Route>
          <Route path="/add" element={<AdminForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

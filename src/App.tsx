import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";
import AdminList from "./app/module/AdminFolder/AdminList";
import AdminForm from "./app/module/AdminFolder/AdminForm";
import BookList from "./app/module/AdminFolder/BookList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<AdminList />}></Route>
          <Route
            path="/list"
            element={
              <>
                <BookList></BookList>
              </>
            }
          ></Route>
          <Route path="/add" element={<AdminForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./app/module/SiteLayout";
import UserList from "./app/module/User/UserList";
import UserForm from "./app/module/User/UserForm";
import BookList from "./app/module/User/BookList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<UserList />}></Route>
          <Route
            path="/list"
            element={
              <>
                <BookList></BookList>
              </>
            }
          ></Route>
          <Route path="/add" element={<UserForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

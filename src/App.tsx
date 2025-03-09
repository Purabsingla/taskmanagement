import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Tasks from "./pages/Tasks";

//Importing Css
import "./css/Button.css";
import "./css/style.css";
import BoardsPage from "./components/sections/AllBoards";
import Details from "./pages/SignUpDetails";
import ContactUs from "./pages/ContactUs";
// import NavBar from "./components/sections/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/allboards" element={<BoardsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/details" element={<Details />} />
          <Route path="/boards/:name" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Blogs from "./pages/Blogs";
import Categories from "./pages/Categories";
import Authors from "./pages/Authors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Blogs from "./pages/Blogs";
import Categories from "./pages/Categories";
import Authors from "./pages/Authors";
import Blog from "./pages/Blog";
import Category from "./pages/Category";
import Author from "./pages/Author";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/author/:id" element={<Author />} />
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

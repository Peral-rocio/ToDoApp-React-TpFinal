import LoginForm from "./components/loginRegistrer/loginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx";
import AddTask from "./components/addTask/addTask.jsx";
import Settings from "./components/settings/settings.jsx";
import Layout from "./components/layout/layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

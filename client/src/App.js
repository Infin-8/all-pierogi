import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Container/Layout";
import Home from "./views/Container/Home";
import SignIn from "./views/Container/SignIn";
import AdminPanel from "./views/Container/AdminPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/admin" element={<SignIn />}>
            <Route index element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

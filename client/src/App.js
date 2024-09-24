import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Container/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
      
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/translator"
          element={<Translator />}
        />

        <Route
          path="/generator"
          element={<Generator />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PraadnyaH from "./pages/profiles/Praadnya/MainApp";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<PraadnyaH />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

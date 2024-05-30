import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TermOfServicePage from "./pages/TermOfServicePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FounderPage from "./pages/FounderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderPage/>}/>
        <Route path="/term" element={<TermOfServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
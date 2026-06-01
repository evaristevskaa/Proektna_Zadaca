import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Matches from "./pages/Matches.jsx";
import MatchDetails from "./pages/MatchDetails.jsx";
import AddMatch from "./pages/AddMatch.jsx";
import EditMatch from "./pages/EditMatch.jsx";
import Stats from "./pages/Stats.jsx";
import ExternalNews from "./pages/ExternalNews.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchDetails />} />
        <Route path="/add-match" element={<AddMatch />} />
        <Route path="/edit-match/:id" element={<EditMatch />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/external-news" element={<ExternalNews />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
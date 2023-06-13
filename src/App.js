import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/main.css';
import Layout from "./Screens/Routes/Layout";
import LoginPage from "./Screens/LoginPage";
import Home from "./Screens/Home";
import LandingPage from "./LandingPage";
import EventListingPage from "./Screens/EventListingPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Home" element={<Home />} />
          <Route path="EventListingPage" element={<EventListingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

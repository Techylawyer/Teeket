import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/main.css';
// import Layout from "./Screens/Routes/Layout";
// import LoginPage from "./Screens/LoginPage";
import Home from "./Screens/Home";
import LandingPage from "./LandingPage";
import EventListingPage from "./Screens/EventListingPage";
import { Container } from "./component/Container";
import Insights from "./Insights";
import Attendees from "./Attendees"

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<LandingPage />} />
    //       <Route path="LoginPage" element={<Container />} />
    //       <Route path="Home" element={<Home />} />
    //       <Route path="EventListingPage" element={<EventListingPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

          <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/Container" element={<Container/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/EventListing" element={<EventListingPage/>}/>
        <Route path="/Insights" element={<Insights/>}/>
        <Route path="/Attendees" element={<Attendees/>}/>

      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Portals/Home";
import MainLayout from "./Layout/Mainlayout";
import Male from "../src/Portals/Male/component";
import Pagenotfound from "./Pagenotfound";
import Female from "../src/Portals/Female/Component";
import ContactUs from "../src/Portals/ContactUs";
import Booking from "../src/Portals/Booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="male" element={<Male/>}/>
            <Route path="female" element={<Female/>}/> 
            <Route path="contact" element={<ContactUs/>}/>
            <Route path="booking" element={<Booking/>}/>
            <Route path="*"element={<Pagenotfound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
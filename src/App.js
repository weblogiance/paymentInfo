import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileRecharge from "./page/MobileRecharge";

import Contactus from "./page/Contactus";
import Aboutus from "./page/Aboutus";


function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/mobile-recharge" element={<MobileRecharge/>} />
             {/* <Route path="/insurance" element={<Insurance/>} /> */}
             <Route path="/contactus" element={<Contactus/>} />
             <Route path="/aboutus" element={<Aboutus/>} />
             {/* <Route path="/insurance/Health-Insurance" element={<HealthInsurance/>} /> */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

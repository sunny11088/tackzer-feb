import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contactus from './pages/Contactus/Contactus';
import Pone from './pages/Allproducts/Pone';
import Products from "./pages/Products/Products";
import Tmeic from "./pages/Tmeic/Tmeic";
import LTPanel from "./pages/Products/LTPanel";
import MCCPanel from "./pages/Products/MCCPanel";
import PDBMLDBPanel from "./pages/Products/PDBMLDBPanel";
import APFCControlPanel from "./pages/Products/APFCControlPanel";
import SynchronizingPanel from "./pages/Products/SynchronizingPanel";
import PLCVFDControlPanel from "./pages/Products/PLCVFDControlPanel";
import SolarPanel800V from "./pages/Products/SolarPanel800V";
import WhatsAppButton from "./components/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ✅ Import is correct

function App() {
  return (
      <Router
          future={{
            v7_startTransition: true, // Opt-in for smoother state transitions
            v7_relativeSplatPath: true, // Opt-in for new relative path behavior in splat routes
          }}
      >
        {/* SpeedInsights should be placed here to cover the entire app */}
        <SpeedInsights />

        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tmeic" element={<Tmeic />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Allproducts/Pone" element={<Pone />} />
          <Route path="/Products/Pone" element={<Pone />} />
          <Route path="/products/lt-panel" element={<LTPanel />} />
          <Route path="/products/mcc-panel" element={<MCCPanel />} />
          <Route path="/products/pdb-mldb-panel" element={<PDBMLDBPanel />} />
          <Route path="/products/apfc-control-panel" element={<APFCControlPanel />} />
          <Route path="/products/synchronizing-panel" element={<SynchronizingPanel />} />
          <Route path="/products/plc-vfd-control-panel" element={<PLCVFDControlPanel />} />
          <Route path="/products/800v-solar-panel" element={<SolarPanel800V />} />
          {/* Other routes */}
        </Routes>

       <WhatsAppButton />

        <Footer />
      </Router>
  );
}

export default App;

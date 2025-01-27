// React stuff
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Elements import
import ScrollToTop from './functions/scroll-top';
import Nav from './elements/navbar';
import MobileNav from './elements/mobile-navbar';
import Footer from './elements/footer';
// Views import
import Layout from './views/_layout';
import Home from './views/home';
// import Services from './views/services';
import Process from './views/process';
import Testimonials from './views/testimonials';
import About from './views/about';
import Contact from './views/contact';
// Services views
import ServicesLayout from './views/services/_layout';
import ServicesPackages from './views/services/service_packages';
import ServicesCalls from './views/services/consultation_calls';
import ServicesLetter from './views/services/letter_services';
import ServicesReservations from './views/services/reservations';
import ServicesAppointment from './views/services/appointment_scheduling';


function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <div className="App">
        <BrowserRouter basename="/jmr-vs">
            <ScrollToTop />
            <MobileNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Nav toggleSidebar={toggleSidebar} />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/" element={<ServicesLayout />} >
                        <Route index path="/services/visa-service-packages" element={<ServicesPackages />} />
                        <Route path="/services/consultation-calls" element={<ServicesCalls />} />
                        <Route path="/services/letter-services" element={<ServicesLetter />} />
                        <Route path="/services/reservations" element={<ServicesReservations />} />
                        <Route path="/services/appointment-scheduling" element={<ServicesAppointment />} />
                    </Route>
                    <Route path="/our-process" element={<Process />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>                
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    );
}

export default App;

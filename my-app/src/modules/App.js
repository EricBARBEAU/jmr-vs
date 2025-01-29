// React stuff
import React, { useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
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
        <HashRouter>
            <ScrollToTop />
            <MobileNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Nav toggleSidebar={toggleSidebar} />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<ServicesLayout />}>
                        <Route path="visa-service-packages" element={<ServicesPackages />} />
                        <Route path="consultation-calls" element={<ServicesCalls />} />
                        <Route path="letter-services" element={<ServicesLetter />} />
                        <Route path="reservations" element={<ServicesReservations />} />
                        <Route path="appointment-scheduling" element={<ServicesAppointment />} />
                    </Route>
                    <Route path="our-process" element={<Process />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="about-us" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </HashRouter>
      </div>
    );
}

function NotFound() {
    const location = useLocation();

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>No match for <code>{location.pathname}</code></p>
        </div>
    );
}

export default App;

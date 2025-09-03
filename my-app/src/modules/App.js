// React stuff
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Elements import
import ScrollToTop from './functions/scroll-top';
import Nav from './elements/navbar';
import MobileNav from './elements/mobile-navbar';
import Footer from './elements/footer';
// Views import
import Layout from './views/_layout';
import Home from './views/home';
import Process from './views/process';
import Testimonials from './views/testimonials';
import About from './views/about';
import Contact from './views/contact';
import Videos from './views/videos';
// Services views
import ServicesLayout from './views/services/_layout';
import ServicesPackages from './views/services/service_packages';
import ServicesCalls from './views/services/consultation_calls';
import ServicesLetter from './views/services/letter_services';
import ServicesReservations from './views/services/reservations';
import ServicesAppointment from './views/services/appointment_scheduling';
// Legal
import LegalNotice from './views/legal/legal_notice';
import PrivacyPolicy from './views/legal/privacy_policy';
// View - 404
import FourZeroFour from './views/404';


function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Redirection when 404
    const redirectPath = sessionStorage.getItem("redirectPath");
    if (redirectPath) {
      sessionStorage.removeItem("redirectPath");
      window.history.replaceState(null, "", redirectPath);
    }

    return (
      <div className="App">
        <BrowserRouter>
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
                    <Route path="videos" element={<Videos />} />
                    <Route path="contact" element={<Contact />} />
                    {/*Legal*/}
                    <Route path="legal-notice" element={<LegalNotice />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    {/*404*/}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    );
}

function NotFound() {
    const location = useLocation();

    return (
        <FourZeroFour
          location={location}
        />
    );
}

export default App;

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Elements import
import Nav from './elements/navbar';
import MobileNav from './elements/mobile-navbar';
import Footer from './elements/footer';
// Views import
import Layout from './views/layout';
import Home from './views/home';
// import Services from './views/services';
import Process from './views/process';
import Testimonials from './views/testimonials';
import About from './views/about';
import Contact from './views/contact';
// Services views
import Services_Layout from './views/services/layout';
import Services_Packages from './views/services/service_packages';
import Services_Calls from './views/services/consultation_calls';
import Services_Letter from './views/services/letter_services';


function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <MobileNav />
            <Nav />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/" element={<Services_Layout />} >
                        <Route index path="/services/visa-service-packages" element={<Services_Packages />} />
                        <Route path="/services/consultation-calls" element={<Services_Calls />} />
                        <Route path="/services/letter-services" element={<Services_Letter />} />
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

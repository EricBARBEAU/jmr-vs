// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Elements import
import Nav from './elements/navbar';
import MobileNav from './elements/mobile-navbar';
import Footer from './elements/footer';
// Views import
import Layout from './views/layout';
import Home from './views/home';
import Services from './views/services';
import Process from './views/process';
import Testimonials from './views/testimonials';
import About from './views/about';
import Contact from './views/contact';


function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <MobileNav />
            <Nav />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/services" element={<Services />} />
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

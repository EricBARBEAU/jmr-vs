// React router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// Elements import
import Nav from './elements/navbar';
import Footer from './elements/footer';
// Views import
// import Test from './views/test';
import Home from './views/home';
import Services from './views/services';
import Process from './views/process';
import Testimonials from './views/testimonials';
import About from './views/about';
import Contact from './views/contact';


function App() {
    return (
      <div className="App">
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/our-process" element={<Process />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
      </div>
    );
}

export default App;

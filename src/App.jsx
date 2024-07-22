import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Special from './Components/Special';
import Event from './Components/Event';
import Chefs from './Components/Chefs';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
 return(
 <>
 
  {/* ======= Top Bar ======= */}
  <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent" data-aos="fade-up">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
      <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
      <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
    </div>
  </section>
  
  {/* ======= Header ======= */}
  <BrowserRouter>
  <Header></Header>
  <Routes><Route path='/' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/menu' element={<Menu></Menu>}></Route>
  <Route path='/special' element={<Special></Special>}></Route>
  <Route path='/event' element={<Event></Event>}></Route>
  <Route path='/chefs' element={<Chefs></Chefs>}></Route>
  <Route path='/gallery' element={<Gallery></Gallery>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>

  </Routes>
  </BrowserRouter> 
 
 
  
  <main id="main">
   
   
   
    {/* ======= Book A Table Section ======= */}
    <section id="book-a-table" className="book-a-table" data-aos="fade-down-right">
      <div className="container">
        <div className="section-title">
          <h2>Book a <span>Table</span></h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
              <div className="validate" />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
            <div className="validate" />
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </section>{/* End Book A Table Section */}
    
    
   
    
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" data-aos="fade-down-right">
    <div className="container">
      <h3>Delicious</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links">
        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
      </div>
      <div className="copyright">
        © Copyright <strong><span>Delicious</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
         Designed by <h1>Jahanzaib Raja</h1>
      </div>
    </div>
  </footer>
   
  
  
  
  

  


 </>)
}

export default App
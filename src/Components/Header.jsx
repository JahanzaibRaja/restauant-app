import { NavLink } from "react-router-dom"


function Header() {
  return (
    <>
     <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <div className="logo me-auto">
        <h1><a href="index.html">Delicious</a></h1>
      
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
            <NavLink to='/' style={{color:''}}>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/special'>Special</NavLink>
            <NavLink to='/event'>Events</NavLink>
            <NavLink to='/chefs'>Chefs</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
      <a href="#book-a-table" className="book-a-table-btn scrollto">Book a table</a>
    </div>
  </header>{/* End Header */}
    </>
  )
}

export default Header
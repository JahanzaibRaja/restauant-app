import { NavLink } from "react-router-dom"

function Home() {
  return (
    <>
    
    
    <section id="hero" data-aos="fade-down-right">
    <div>
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators" id="hero-carousel-indicators">
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    {/* Slide 1 */}
    <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}>
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
          <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <div>
            <NavLink to='/menu' className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</NavLink>
            <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
      </div>
    </div>
    {/* Slide 2 */}
    <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)'}}>
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
          <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <div>
            <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
      </div>
    </div>
    {/* Slide 3 */}
    <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}>
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
          <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <div>
            <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
            <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  </section>
  
    </>
  )
}

export default Home
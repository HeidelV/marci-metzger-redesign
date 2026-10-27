import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <p className="hero-eyebrow">
          MARCI METZGER · THE RIDGE REALTY GROUP
        </p>

        <h1>Pahrump Realtor</h1>

        <div className="hero-buttons">
            <a href="" className="hero-btn-call">
                Call Now
            </a>
        </div>
      </div>

      <a href="#properties" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i className="bi bi-arrow-down"></i>
      </a>
    </section>
  );
}

export default Hero;

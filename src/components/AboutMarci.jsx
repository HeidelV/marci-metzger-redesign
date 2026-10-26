import './AboutMarci.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">

          {/* Marci's Photo */}
          <div className="about-image">
            <img
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.07%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true"
              alt="Marci Metzger"
            />
          </div>

          {/* About Marci Text */}
          <div className="about-text">
            <div className="about-eyebrow">
                <span className="about-line"></span>
                <span>ABOUT MARCI</span>
            </div>

            <h2>Marci Metzger</h2>

            <p className="about-tagline">
              REALTOR FOR NEARLY 3 DECADES
            </p>

            <a className="about-phone" href="tel:2069196886">
              206-919-6886
            </a>

            <div className="about-divider"></div>


            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
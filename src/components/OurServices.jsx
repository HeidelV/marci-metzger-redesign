import "./OurServices.css";

const ourServices = [
  {
    number: "01",
    image:
      "https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    number: "02",
    image:
      "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
  },
  {
    number: "03",
    image:
      "https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

function OurServices() {
  return (
    <section className="our-services-section" id="our-services">
      <div className="container">
        <div className="our-services-heading">
          <div className="our-services-eyebrow">
            <span className="our-services-line"></span>
            <span>WHAT WE OFFER</span>
          </div>

          <h2>OUR SERVICES.</h2>
        </div>

        <div className="row our-services-grid">
          {ourServices.map((service) => (
            <div
              className="col-md-4 our-services-column"
              key={service.number}
            >
              <div className="our-service-card">
                <span className="our-service-number">
                  {service.number}
                </span>

                <img
                  className="our-service-image"
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
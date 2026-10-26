
import './Services.css';

const services = [
  {
    number: '01',
    image:
      'https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true',
    title: 'Top Residential Sales Last 5 Years',
    description:
      'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.',
  },
  {
    number: '02',
    image:
      'https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300',
    title: "Don't Just List it...",
    subtitle: 'Get it SOLD!',
    description:
      'We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
  },
  {
    number: '03',
    image:
      'https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m',
    title: 'Guide to Buyers',
    description:
      'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-heading">
          <span className="services-eyebrow">HOW WE HELP</span>
          <h2>GET IT SOLD.</h2>
        </div>

        <div className="row services-grid">
          {services.map((service) => (
            <div className="col-md-4 services-column" key={service.number}>
              <div className="service-card">
                <span className="service-number">{service.number}</span>

                <img
                  className="service-image"
                  src={service.image}
                  alt={service.title}
                />

                <h3>{service.title}</h3>

                {service.subtitle && (
                  <h4 className="service-subtitle">{service.subtitle}</h4>
                )}

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

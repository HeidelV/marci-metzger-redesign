import "./Affiliations.css";

const logos = [
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=h:100,cg:true,m",
    alt: "Business Logo",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true",
    alt: "Equal Housing Opportunity",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true",
    alt: "REALTOR",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=h:100,cg:true,m",
    alt: "Chamber of Commerce",
  },
];

function Affiliations() {
  return (
    <section className="affiliations-section">
      <div className="container">
        <div className="affiliations-track">
          {[0, 1].map((group) => (
            <div
              className="affiliations-group"
              key={group}
              aria-hidden={group === 1}
            >
              {logos.map((logo, index) => (
                <div className="affiliation-logo" key={index}>
                  <img src={logo.src} alt={group === 0 ? logo.alt : ""} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Affiliations;
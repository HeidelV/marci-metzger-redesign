
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [hoursOpen, setHoursOpen] = useState(false);

  const officeHours = [
    { day: "Monday", short: "Mon", open: "08:00 am", close: "07:00 pm" },
    { day: "Tuesday", short: "Tue", open: "08:00 am", close: "07:00 pm" },
    { day: "Wednesday", short: "Wed", open: "08:00 am", close: "07:00 pm" },
    { day: "Thursday", short: "Thu", open: "08:00 am", close: "07:00 pm" },
    { day: "Friday", short: "Fri", open: "08:00 am", close: "07:00 pm" },
    { day: "Saturday", short: "Sat", open: "08:00 am", close: "07:00 pm" },
    { day: "Sunday", short: "Sun", open: "08:00 am", close: "07:00 pm" },
  ];

  // Determine the current weekday using the visitor's local time.
    const todayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    }).format(new Date());

  const todayIndex = officeHours.findIndex(
    (hours) => hours.day === todayName
  );

  const today = officeHours[todayIndex];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-top-triangle" aria-hidden="true"></div>

      <div className="container">
        <div className="contact-heading">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h2>Call or Visit</h2>
        </div>

        <div className="row contact-main">
          {/* Contact form */}
          <div className="col-lg-6 contact-form-column">
            <h3>Send A Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email*</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send
              </button>
            </form>

            <p className="contact-recaptcha">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>

          {/* Business information */}
          <div className="col-lg-6 contact-info-column">
            <div className="contact-info-block">
              <div className="contact-business-heading">
                <h3>Marci Metzger</h3>
                <p className="contact-company">
                  THE RIDGE REALTY GROUP
                </p>
              </div>

              <div className="contact-detail">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <p>
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </p>
              </div>

              <div className="contact-detail">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <a href="tel:+12069196886">(206) 919-6886</a>
              </div>
            </div>

            {/* Interactive office hours */}
            <div className="contact-info-block contact-hours">
              <h3>Office Hours</h3>

              <button
                type="button"
                className="contact-hours-toggle"
                onClick={() => setHoursOpen((previous) => !previous)}
                aria-expanded={hoursOpen}
                aria-controls="contact-hours-list"
              >
                <span className="contact-hours-label">Open today</span>

                <span className="contact-hours-time">
                  {today.open} – {today.close}
                </span>

                <i
                  className={`bi ${
                    hoursOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                  aria-hidden="true"
                ></i>
              </button>

              {hoursOpen && (
                <div
                  className="contact-hours-list"
                  id="contact-hours-list"
                >
                  {officeHours.map((hours, index) => (
                    <div
                      key={hours.day}
                      className={`contact-hours-row ${
                        index === todayIndex ? "is-today" : ""
                      }`}
                    >
                      <span>{hours.short}</span>
                      <span>
                        {hours.open} – {hours.close}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="contact-hours-summary">
                <span className="contact-hours-label">Open daily</span>
                <span className="contact-hours-time">
                  8:00 am - 7:00 pm
                </span>
              </div>

              <p className="contact-appointments">
                Appointments outside office hours available upon request.
                Just call!
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Marci Metzger office location"
            src="https://www.google.com/maps?q=3190+HW-160+Suite+F,+Pahrump,+Nevada+89048&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer */}
        <footer className="contact-footer">
          <div className="contact-footer-top">
            <div className="contact-footer-logo">
              <img
                src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
                alt="Marci Metzger, The Ridge Realty Group"
              />
            </div>

            <div className="contact-footer-socials">
              <a
                href="https://www.facebook.com/MarciHomes/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.instagram.com/marcimetzger_theridge/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/marci-metzger-30642496/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
                target="_blank"
                rel="noreferrer"
                aria-label="Yelp"
                className="contact-yelp"
              >
                yelp
              </a>
            </div>
          </div>

          <div className="contact-footer-bottom">
            <p>
              Copyright © 2026 Marci METZGER - All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;

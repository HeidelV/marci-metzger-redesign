import { useState } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Property at 4460 Roseworthy",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Property at 5570 Ailanto",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Interior at 5570 Ailanto",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Property detail at 5570 Ailanto",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Property at 4787 E Beacon Ridge",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Home at 4787 E Beacon Ridge",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:655",
    alt: "Property interior at 4787 E Beacon Ridge",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      (current + 1) % galleryImages.length
    );
  };

  const getImagePosition = (index) => {
    let difference = index - activeIndex;
    const halfLength = Math.floor(galleryImages.length / 2);

    if (difference > halfLength) {
      difference -= galleryImages.length;
    } else if (difference < -halfLength) {
      difference += galleryImages.length;
    }

    return difference;
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-eyebrow">
            <span className="gallery-line"></span>
            <span>PROPERTY GALLERY</span>
          </div>

          <div className="gallery-arrows">
            <button
              className="gallery-arrow"
              onClick={showPrevious}
              aria-label="Previous photo"
            >
              &#8592;
            </button>

            <button
              className="gallery-arrow"
              onClick={showNext}
              aria-label="Next photo"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="gallery-carousel">
          {galleryImages.map((image, index) => {
            const position = getImagePosition(index);

            return (
              <div
                className={`gallery-item ${
                  position === 0 ? "active" : ""
                }`}
                key={image.src}
                style={{
                  "--position": position,
                }}
                aria-hidden={Math.abs(position) > 2}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        <div className="gallery-counter">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(galleryImages.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
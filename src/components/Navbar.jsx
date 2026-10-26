import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep navbar visible near the top
      if (currentScrollY < 100) {
        setIsHidden(false);
      } else if (!menuOpen) {
        // Hide when scrolling down
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true);
        }
        // Show when scrolling up
        else if (currentScrollY < lastScrollY.current) {
          setIsHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`custom-navbar ${isHidden ? 'navbar-hidden' : ''}`}>
        <div className="container-fluid navbar-container">

          {/* Left navigation */}
          <div className="navbar-side navbar-left">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#properties">Listings</a>
          </div>

          {/* Centered logo */}
          <a
            className="navbar-logo"
            href="#home"
            aria-label="Marci Metzger home"
          >
            <img
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
              alt="Marci Metzger, The Ridge Realty Group"
            />
          </a>

          {/* Right navigation */}
          <div className="navbar-side navbar-right">
            <a className="nav-link" href="#lets-move">Let's Move</a>
            <a className="nav-link" href="#about">About Us</a>

            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              <span>MENU</span>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>

        {/* Small inverted triangle */}
        <svg
          className="navbar-triangle"
          viewBox="0 0 53 24"
          aria-hidden="true"
        >
          <path d="M26.5 24L53 0H0z" fill="#ffffff" />
        </svg>
      </nav>

      {/* Sidebar overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`nav-sidebar ${menuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <span>MENU</span>

          <button
            className="sidebar-close"
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="sidebar-links">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#properties" onClick={() => setMenuOpen(false)}>Listings</a>
          <a href="#lets-move" onClick={() => setMenuOpen(false)}>Let's Move</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
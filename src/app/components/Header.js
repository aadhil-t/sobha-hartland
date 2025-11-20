"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.scss";
import "../../styles/_header.scss";

export default function Header() {
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const headerTop = headerEl.offsetTop;

    const handleScroll = () => {
      if (window.scrollY >= headerTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={`header-sec ${isFixed ? "fixed" : ""}`}>
      <div className="outer">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left">
              <img
                src="/assets/homepage/header-icon.svg"
                alt="header-logo"
                className="icon"
              />

              {/* Hamburger menu below image */}
              <button className="hamburger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

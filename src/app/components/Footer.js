"use client";
import Link from "next/link";
import "../globals.scss";
import "../../styles/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer-sec">
      <div className="outer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-left">
              <p>© 2025. Sobha Heartland II. All rights reserved.</p>

              <div className="social-icons">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/fb.svg"
                    alt="Facebook"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/linkedin.svg"
                    alt="LinkedIn"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/ball.svg"
                    alt="Dribbble"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/insta.svg"
                    alt="Instagram"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/be.svg"
                    alt="Behance"
                    className="icon"
                  />
                </Link>

                <Link
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/homepage/x.svg"
                    alt="X (Twitter)"
                    className="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

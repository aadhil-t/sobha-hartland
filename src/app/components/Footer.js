"use client";
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
                    <img
                        src="/assets/homepage/fb.svg"
                        alt="header-logo"
                        className="icon"
                    />
                    <img
                        src="/assets/homepage/linkedin.svg"
                        alt="header-logo"
                        className="icon"
                    />
                    <img
                        src="/assets/homepage/ball.svg"
                        alt="header-logo"
                        className="icon"
                    />
                    <img
                        src="/assets/homepage/insta.svg"
                        alt="header-logo"
                        className="icon"
                    />
                    <img
                        src="/assets/homepage/be.svg"
                        alt="header-logo"
                        className="icon"
                    />
                    <img
                        src="/assets/homepage/x.svg"
                        alt="header-logo"
                        className="icon"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

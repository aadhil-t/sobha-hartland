"use client";
import Link from "next/link";
import React, { useState , useEffect} from "react";
import "./home.scss";
import "../styles/_community-sec.scss";
import "../styles/_accordian-sec.scss";
import "../styles/_luxury-sec.scss";
import "../styles/_faq.scss";
import "../styles/_step-sec.scss";
import "../styles/_image-sec.scss";
import "../styles/_information.scss";
import "../styles/_dubai-sec.scss";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {

  
  useEffect(() => {
    const banner = document.querySelector(".home-banner");
    const ball = banner.querySelector(".ball");

    // Set initial position
    gsap.set(ball, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(ball, "x", { duration: 0.5, ease: "expo.out" });
    const yTo = gsap.quickTo(ball, "y", { duration: 0.5, ease: "expo.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(ball, { scale: 1, duration: 0.5, ease: "expo.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(ball, { scale: 0, duration: 0.5, ease: "expo.out" });
    };

    // Add event listeners to the banner only
    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseenter", handleMouseEnter);
    banner.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Cleanup on unmount
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseenter", handleMouseEnter);
      banner.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  
  const [activeIndex, setActiveIndex] = useState(0); // default open first (Live)

  const sections = [
    {
      icon: "/assets/homepage/star.svg",
      label: "Live",
      title: "Crafting a Lifestyle of Your Dreams",
      image: "/assets/homepage/acco1.png",
      text: [
        "Sobha Hartland II is a stunning mixed-use community featuring lush green spaces and sustainable amenities. It offers a harmonious blend of residential and recreational options, creating an ideal urban living environment intertwined with nature.",
        "Within this community is Sobha Estates, an exclusive gated villa enclave offering luxurious 5- and 6-bedroom villas. This private retreat emphasises both luxury and privacy, surrounded by vibrant greenery and serene waterways.",
        "The Riverside Crescent, Skyscape and Skyvue residences further enhance the appeal. Riverside Crescent features six unique towers for waterfront living, while Skyscape, comprising Aura, Altius, and Avenue boasts stunning views of the lagoon and Dubai Downtown and Skyvue consists of three towers overlooking the iconic Dubai skyline and Ras Al Khor wildlife sanctuary. Together, they redefine urban sophistication and luxury living in Dubai.",
      ],
    },
    {
      icon: "/assets/homepage/entertainment.svg",
      label: "Entertainment",
      title: "Leisure that Refreshes Your Soul",
      image: "/assets/homepage/acco1.png",
      text: [
        "Indulge in world-class entertainment with exclusive leisure hubs, serene parks, and family-friendly spaces that redefine recreation within the community.",
      ],
    },
    {
      icon: "/assets/homepage/dine.svg",
      label: "Dine",
      title: "Feast on Luxurious Delicacies",
      image: "/assets/homepage/acco1.png",
      text: [
        "Experience a culinary journey with fine dining restaurants, cozy cafés, and vibrant eateries offering international and local cuisine amidst stunning views.",
      ],
    },
  ];

  const faqs = [
    {
      number: "01",
      question: "Why invest in Sobha Hartland II?",
      answer: (
        <>
          <p>
            Investing in Sobha Hartland II offers several compelling reasons:
          </p>
          <p>
            <strong>Prime Location:</strong>
            <br />
            Sobha Hartland II is strategically located in the heart of Dubai,
            making it an attractive investment opportunity. Its proximity to
            major business districts, entertainment hubs, and key landmarks,
            including Burj Khalifa, Dubai Waterfront, and more.
          </p>
          <p>
            <strong>Quality Construction and Design:</strong>
            <br />
            Sobha Group is known for its commitment to delivering high-quality
            construction and design. Investing in Sobha Hartland II ensures that
            you are purchasing a property built to the highest standards,
            offering durability and long-term value.
          </p>
        </>
      ),
    },
    {
      number: "02",
      question: "What are the projects of Sobha Hartland II?",
      answer: (
        <p>
          Sobha Hartland II includes a variety of luxury villas, apartments, and
          waterfront homes that combine modern architecture with lush
          landscaping, all within a prime location in Dubai.
        </p>
      ),
    },
    {
      number: "03",
      question: "Is Sobha Hartland II a desirable place to make an investment?",
      answer: (
        <p>
          Absolutely. Its premium location, developer reputation, and high
          construction standards make it one of the most desirable investment
          opportunities in Dubai’s luxury real estate market.
        </p>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // inside Home component, with other states
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };


  

  return (
    <main>
      {/* home banner */}
      <div className="home-banner">
          <div className="ball">
                <span className="ball-text">Connect</span>
          </div> 
        <div className="bg-image">
          <div className="container">
            <div className="head-content-blk">
              <img
                src="/assets/homepage/sobha-hartland.svg"
                alt="sobha-hartland"
              />
              <h1>Crafting a Lifestyle of Your Dreams</h1>
              <p>
                Sobha Hartland II is a stunning mixed-use community featuring
                lush green spaces and sustainable amenities.
              </p>
            </div>
            <div className="media-btn-blk">
              <Link href="/callback" className="btn-media">
                Call Back
                <img
                  src="/assets/homepage/call.svg"
                  alt="Call Back"
                  className="icon"
                />
              </Link>

              <Link href="/whatsapp" className="btn-media green-btn">
                WhatsApp
                <img
                  src="/assets/homepage/whatsapp.svg"
                  alt="WhatsApp"
                  className="icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Header/>

      {/* Community section */}
      <section className="community-section">
        <div className="outer">
          <div className="container">
            <div className="community-container">
              <div className="community-left">
                <h3>Dubai’s most</h3>
                <h2>Premium Master Community</h2>

                <div className="community-stats">
                  <div className="stat-item">
                    <img
                      src="/assets/homepage/area.svg"
                      alt="Total Land Area"
                    />
                    <div>
                      <h4>
                        8 <span>Million Sq. Ft.</span>
                      </h4>
                      <p>Total Land Area</p>
                    </div>
                  </div>

                  <div className="stat-item">
                    <img
                      src="/assets/homepage/building.svg"
                      alt="Residential Units"
                    />
                    <div>
                      <h4>12000 +</h4>
                      <p>Residential Units</p>
                    </div>
                  </div>

                  <div className="stat-item">
                    <img src="/assets/homepage/sun.svg" alt="Open Spaces" />
                    <div>
                      <h4>39 %</h4>
                      <p>Open Spaces</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="community-image">
                <img
                  src="/assets/homepage/community.png"
                  alt="Sobha Hartland II"
                />
              </div>

              <div className="community-right">
                <p>
                  Sobha Hartland II marks the next chapter in the remarkable
                  success of Sobha Hartland, redefining luxury living across 8
                  million square feet. Located near its predecessor, this
                  exceptional community seamlessly blends urban convenience with
                  natural beauty, offering residents easy access to the city’s
                  top malls, business districts, and attractions, while
                  providing a peaceful escape in a vibrant, centrally connected
                  sanctuary.
                </p>

                <p>
                  Sobha Hartland II is a private, gated community where nature’s
                  splendor thrives, offering an extraordinary lifestyle that
                  transcends the ordinary and immerses you in unparalleled
                  luxury.
                </p>

                <a href="#" className="btn-connect">
                  Connect Us
                  {/* <img src="/assets/icons/arrow-right.svg" alt="arrow" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Section */}
      <section class="dubai-centre">
        <div className="container">
          <div class="hero-image">
            <img src="/assets/homepage/dubai.png" alt="Dubai skyline at night"/>
            <div class="hero-text">
              <h2>Right in the <span>Centre of Dubai</span></h2>
            </div>
          </div>

          <div class="info-section">
            <ul class="locations">
              <li>
                <h3>Dubai Design District</h3>
                <p>8 minutes away – 6.7 km</p>
              </li>
              <li>
                <h3>Ras Al Khor Wildlife Sanctuary</h3>
                <p>5 minutes away – 6 km</p>
              </li>
              <li>
                <h3>Dubai Mall</h3>
                <p>13 minutes away – 8.9 km</p>
              </li>
              <li>
                <h3>Burj Al Arab</h3>
                <p>28 minutes away – 24 km</p>
              </li>
              <li>
                <h3>Downtown Dubai</h3>
                <p>10 minutes away – 8.7 km</p>
              </li>
            </ul>
          </div>
        </div>
    </section>


    {/* Video Section */}
      <section className="video-section">
        <div className="container">
          {/* Heading */}
          <h2 className="video-heading">
            Step Into <span>A World Of Sophistication</span>
          </h2>

          {/* Video Block */}
          <div className="vdo-dec-blk">
            <div className="video-wrapper">
              {!isPlaying ? (
                <>
                  <img
                    src="/assets/homepage/stepvideo.png"
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                  <button className="play-btn" onClick={handlePlay}>
                    <span className="play-icon">▶</span>
                    <span className="play-text">Play</span>
                  </button>
                </>
              ) : (
                <div className="video-player">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1"
                    title="Sobha Hartland II Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="video-description">
              <p>
                Sobha Hartland II is strategically located in the heart of Dubai,
                making it an attractive investment opportunity. Its proximity to
                major business districts, entertainment hubs, and key landmarks,
                including Burj Khalifa, Dubai Waterfront, and more.
              </p>

              <button className="connect-btn">
                Connect Us <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* lifestyle Accordian Section */}
      <section className="lifestyle-section">
        <div className="outer">
          <div className="container">
            {sections.map((item, index) => (
              <div
                key={index}
                className={`lifestyle-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)} // 👈 change on hover
                onClick={() => setActiveIndex(index)} // also works on mobile
              >
                <div className="lifestyle-header">
                  <div className="left">
                    <img src={item.icon} alt={item.label} />
                    <span>{item.label}</span>
                  </div>
                  <h2>{item.title}</h2>
                </div>

                {activeIndex === index && (
                  <div className="lifestyle-content">
                    <div className="image-blk">
                      <img src={item.image} alt={item.label} />
                    </div>
                    <div className="text-blk">
                      {item.text.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury slider Section */}
      <div className="luxury-slider">
      <div className="container">
        <div className="top-swip-head">
          <h4>In the heart of</h4>
          <h3>Luxury</h3>
        </div>
        <Swiper
          modules={[FreeMode, Navigation]}
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}  
          navigation={true}
          loop={true}
          className="luxury-swiper"
          Navigationavigation={{
            prevEl: ".luxury-prev",
            nextEl: ".luxury-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            550: { slidesPerView: 1, spaceBetween: 16 },   // Below 800px → 2 slides
            800: { slidesPerView: 1, spaceBetween: 20 },   // Above 800px → 3 slides
          }}
        >
          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Pool Area" />
              </div>
              <div className="luxury-slide-content">
                <h4>Elegant Pool Area</h4>
                <p>
                  Clique nas numerações do mapa para visualizar as áreas comuns.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Grand Lobby" />
              </div>
              <div className="luxury-slide-content">
                <h4>Grand Lobby</h4>
                <p>Clique nas numerações do mapa para visualizar as áreas comuns.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Modern Lounge" />
              </div>
              <div className="luxury-slide-content">
                <h4>Modern Lounge</h4>
                <p>Clique nas numerações do mapa para visualizar as áreas comuns.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Exclusive Bar" />
              </div>
              <div className="luxury-slide-content">
                <h4>Exclusive Bar</h4>
                <p>
                  Clique nas numerações do mapa para visualizar as áreas comuns.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>

      {/* Faq Section */}
      <section className="faq-section">
          <div className="container">
        <div className="outer">
            <div className="faq-left">
              <p className="faq-subtitle">Got Questions?</p>
              <h2 className="faq-title">
                We've Got <br />
                <span>Answers!</span>
              </h2>
            </div>

            <div className="faq-right">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="faq-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="faq-number">{faq.number}</span>
                    <h3 className="faq-question">{faq.question}</h3>
                  </div>

                  <div
                    className="faq-content"
                    style={{
                      maxHeight: activeIndex === index ? "500px" : "0px",
                    }}
                  >
                    <div className="faq-inner">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* image Section */}
      <div className="image-section">
        <div className="outer">
          <img src="/assets/homepage/image-sec.png" alt="Exclusive Bar" />
        </div>
      </div>

      {/* information Section */}
      <div className="information-section">
        <div className="outer">
          <div className="container">
            <h2 className="info-title">Need more informations?</h2>
          </div>
        </div>
      </div>


    </main>
  );
}

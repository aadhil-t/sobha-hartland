"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "./home.scss";
import "../styles/_common.scss";
import "../styles/_community-sec.scss";
import "../styles/_accordian-sec.scss";
import "../styles/_luxury-sec.scss";
import "../styles/_faq.scss";
import "../styles/_step-sec.scss";
import "../styles/_image-sec.scss";
import "../styles/_information.scss";
import "../styles/_dubai-sec.scss";
import "../styles/_premium-sec.scss";
import "../styles/_scroll.scss";
import Header from "./components/Header";
import AnimatedButton from "../app/components/Connectbtn"; // adjust path if needed
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination  } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
gsap.registerPlugin(ScrollTrigger);
// AOS //
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {


  
  const premiumData = [
  {
    title: "Skyvue Altier",
    subtitle: "1, 1.5, 2, 2.5, 3 and 4 Bedroom Apartments",
    img: "/assets/homepage/premium1.png",
  },
  {
    title: "Skyvue Solair",
    subtitle: "1, 1.5, 2 and 4 Bedroom Apartments",
    img: "/assets/homepage/premium1.png",
  },
  {
    title: "Skyscape Altius",
    subtitle: "1, 1.5, 2 and 2.5 Bedroom Apartments",
    img: "/assets/homepage/premium1.png",
  },
  {
    title: "Demo 1",
    subtitle: "1, 1.5, 2 and 2.5 Bedroom Apartments",
    img: "/assets/homepage/premium1.png",
  },
  {
    title: "Demo 2",
    subtitle: "1, 1.5, 2 and 2.5 Bedroom Apartments",
    img: "/assets/homepage/premium1.png",
  },
  {
    title: "Demo 3",
    subtitle: "1, 1.5, 2 and 2.5 Bedroom Apartments",
    img: "/assets/homepage/premium1.png",
  },
];



  // community counter animation //
  const countersRef = useRef([]);
  const sectionRef = useRef(null);
  useEffect(() => {
      const ctx = gsap.context(() => {
        countersRef.current.forEach((counterEl) => {
          if (!counterEl) return;

          const finalValue = parseFloat(counterEl.dataset.value);
          const suffix = counterEl.dataset.suffix || "";
          const prefix = counterEl.dataset.prefix || "";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",      
              end: "bottom 20%",
              toggleActions: "play none none reset", 
            },
          });

          tl.fromTo(
            counterEl,
            { innerText: 0 },
            {
              innerText: finalValue,
              duration: 2.5,
              ease: "power1.out",
              snap: { innerText: 1 },
              onUpdate() {
                counterEl.textContent = `${prefix}${Math.floor(
                  counterEl.innerText
                )}${suffix}`;
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
  }, []);

  

  // Aos effect //
    useEffect(() => {
    // Initialize AOS once
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);

  // Mouse follow effect //
  useEffect(() => {
    const sections = [
      { selector: ".home-banner", ballClass: ".banner-ball" },
      { selector: ".information-section", ballClass: ".info-ball" },
      { selector: ".video-section .vdo-dec-blk", ballClass: ".video-ball" }
    ];

    const cleanupFns = [];

    sections.forEach(({ selector, ballClass }) => {
      const section = document.querySelector(selector);
      const ball = document.querySelector(ballClass);

      if (!section || !ball) return;

      gsap.set(ball, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(ball, "x", { duration: 0.5, ease: "expo.out" });
      const yTo = gsap.quickTo(ball, "y", { duration: 0.5, ease: "expo.out" });

      let isPaused = false;

      const handleMove = (e) => {
        if (!isPaused) {
          xTo(e.clientX);
          yTo(e.clientY);
        }
      };

      const handleEnter = () => {
        if (!isPaused)
          gsap.to(ball, { scale: 1, duration: 0.5, ease: "expo.out" });
      };

      const handleLeave = () => {
        gsap.to(ball, { scale: 0, duration: 0.5, ease: "expo.out" });
      };

      section.addEventListener("mousemove", handleMove);
      section.addEventListener("mouseenter", handleEnter);
      section.addEventListener("mouseleave", handleLeave);

      // Pause when hovering buttons / links
      const pauseElements = section.querySelectorAll(".btn, .scroll-down, iframe, .play-btn");
      const handlePauseEnter = () => {
        isPaused = true;
        gsap.to(ball, { opacity: 0, scale: 0.5, duration: 0.3 });
      };
      const handlePauseLeave = () => {
        isPaused = false;
        gsap.to(ball, { opacity: 1, scale: 1, duration: 0.3 });
      };

      pauseElements.forEach((el) => {
        el.addEventListener("mouseenter", handlePauseEnter);
        el.addEventListener("mouseleave", handlePauseLeave);
      });

      // 👉 If this is the video ball, add click-to-play behavior
      if (ballClass === ".video-ball") {
        const videoBall = ball;
        videoBall.addEventListener("click", () => {
          const playButton = document.querySelector(".video-thumbnail");
          if (playButton) playButton.click(); // trigger the React state change
        });
        cleanupFns.push(() => videoBall.removeEventListener("click", () => {}));
      }

      cleanupFns.push(() => {
        section.removeEventListener("mousemove", handleMove);
        section.removeEventListener("mouseenter", handleEnter);
        section.removeEventListener("mouseleave", handleLeave);
        pauseElements.forEach((el) => {
          el.removeEventListener("mouseenter", handlePauseEnter);
          el.removeEventListener("mouseleave", handlePauseLeave);
        });
      });
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, []);


 // 👇 Scroll-based open logic
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    }, options);

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      itemRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);



  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

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

  const [isCircleActive, setIsCircleActive] = useState(true);

  // GLOBAL FOLLOW CIRCLE
  useEffect(() => {
    const moveCircle = (event) => {
      if (!isCircleActive) return; // 👈 stop movement when disabled
      gsap.to(".circle", {
        duration: 0.3,
        x: event.clientX - 10,
        y: event.clientY - 10,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCircle);
    return () => document.removeEventListener("mousemove", moveCircle);
  }, [isCircleActive]);

  // 🟡 SECTION-SPECIFIC BALLS
  useEffect(() => {
    const sections = [
      { selector: ".home-banner", ballClass: ".banner-ball" },
      { selector: ".information-section", ballClass: ".info-ball" },
      { selector: ".video-section .vdo-dec-blk", ballClass: ".video-ball" },
    ];

    const cleanupFns = [];

    sections.forEach(({ selector, ballClass }) => {
      const section = document.querySelector(selector);
      const ball = document.querySelector(ballClass);
      if (!section || !ball) return;

      gsap.set(ball, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(ball, "x", { duration: 0.5, ease: "expo.out" });
      const yTo = gsap.quickTo(ball, "y", { duration: 0.5, ease: "expo.out" });
      let isPaused = false;

      const handleMove = (e) => {
        if (!isPaused) {
          xTo(e.clientX);
          yTo(e.clientY);
        }
      };

      const handleEnter = () => {
        setIsCircleActive(false); // 👈 hide global circle
        gsap.to(ball, { scale: 1, duration: 0.5, ease: "expo.out" });
      };

      const handleLeave = () => {
        setIsCircleActive(true); // 👈 re-enable global circle
        gsap.to(ball, { scale: 0, duration: 0.5, ease: "expo.out" });
      };

      section.addEventListener("mousemove", handleMove);
      section.addEventListener("mouseenter", handleEnter);
      section.addEventListener("mouseleave", handleLeave);

      cleanupFns.push(() => {
        section.removeEventListener("mousemove", handleMove);
        section.removeEventListener("mouseenter", handleEnter);
        section.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, []);

  return (
    
    <main>
<div className="circle">
  <div className="circle-inner"></div>
</div>

      {/* home banner */}
    <>
      <div className="home-banner">
        <div className="banner-ball">
          <span className="ball-text">Connect</span>
        </div>

        <div className="bg-image">
          <div className="container">
            <div className="head-content-blk" data-aos="fade-up">
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
              <Link href="/callback" className="btn primary" data-aos="">
                Call Back
                <img
                  src="/assets/homepage/call.svg"
                  alt="Call Back"
                  className="icon"
                />
              </Link>

              <Link href="/whatsapp" className="btn green" data-aos="">
                WhatsApp
                <img
                  src="/assets/homepage/whatsapp.svg"
                  alt="WhatsApp"
                  className="icon"
                />
              </Link>
            </div>

            <div className="media-btn-mb-blk">
              <Link href="/callback" className="btn primary" data-aos="">
                <img
                  src="/assets/homepage/call.svg"
                  alt="Call Back"
                  className="icon"
                />
              </Link>

              <Link href="/whatsapp" className="btn green" data-aos="">
                <img
                  src="/assets/homepage/whatsapp.svg"
                  alt="WhatsApp"
                  className="icon"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 👇 Scroll-down button added here */}
        <a href="#next-section" className="scroll-down" >
          <span></span>
          Scroll Down
        </a>
      </div>
    </>

      <Header/>

      {/* Community section */}
      <section className="community-section" id="next-section" ref={sectionRef}>
        <div className="outer">
          <div className="container">
            <div className="community-container">
              {/* Left section */}
              <div className="community-left">
                <h3 data-aos="fade-up">Dubai’s most</h3>
                <h2 data-aos="fade-up">Premium Master Community</h2>

                <div className="community-stats">
                <div className="stat-item" data-aos="fade-up">
                  <img src="/assets/homepage/area.svg" alt="Total Land Area" />
                  <div className="stat-content">
                    <div className="stat-top">
                      <h4 ref={(el) => (countersRef.current[0] = el)} data-value="8">0</h4>
                      <span className="millio">Million Sq. Ft.</span>
                    </div>
                    <p>Total Land Area</p>
                  </div>
                </div>

                <div className="stat-item" data-aos="fade-up">
                  <img src="/assets/homepage/building.svg" alt="Residential Units" />
                  <div className="stat-content">
                    <div className="stat-top">
                      <h4 ref={(el) => (countersRef.current[1] = el)} data-value="12000">0</h4>
                      <span>+</span>
                    </div>
                    <p>Residential Units</p>
                  </div>
                </div>

                <div className="stat-item" data-aos="fade-up">
                  <img src="/assets/homepage/sun.svg" alt="Open Spaces" />
                  <div className="stat-content">
                    <div className="stat-top">
                      <h4 ref={(el) => (countersRef.current[2] = el)} data-value="39">0</h4>
                      <span>%</span>
                    </div>
                    <p>Open Spaces</p>
                  </div>
                </div>

                </div>

              </div>

              {/* Middle image */}
              <div className="community-image" data-aos="fade-up">
                <img src="/assets/homepage/community.png" alt="Sobha Hartland II" />
              </div>

              {/* Right section */}
              <div className="community-right" data-aos="fade-up">
                <p>
                  Sobha Hartland II marks the next chapter in the remarkable success of Sobha Hartland,
                  redefining luxury living across 8 million square feet. Located near its predecessor,
                  this exceptional community seamlessly blends urban convenience with natural beauty.
                </p>
                <p>
                  Sobha Hartland II is a private, gated community where nature’s splendor thrives,
                  offering an extraordinary lifestyle that transcends the ordinary and immerses you in
                  unparalleled luxury.
                </p>

                <AnimatedButton
                  label="Connect Us"
                  onClick={() => console.log("Button clicked")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Dubai Section */}
      <section class="dubai-centre">
        <div class="container">
          <div class="hero-image" data-aos="fade-up">
            <img src="/assets/homepage/dubai.png" alt="Dubai skyline at night" />
            <div class="hero-text">
              <h2>Right in the <span>Centre of Dubai</span></h2>
            </div>
          </div>
        </div>

          <div class="info-section">
            <div className="container">
            <div class="locations-wrapper">
              <ul class="locations top-row">
                <li data-aos="fade-up">
                  <h3>Dubai Design District</h3>
                  <p>8 minutes away – 6.7 km</p>
                </li>
                <li data-aos="fade-up">
                  <h3>Ras Al Khor Wildlife Sanctuary</h3>
                  <p>5 minutes away – 6 km</p>
                </li>
              </ul>

              <ul class="locations bottom-row">
                <li data-aos="fade-up">
                  <h3>Dubai Mall</h3>
                  <p>13 minutes away – 8.9 km</p>
                </li>
                <li data-aos="fade-up">
                  <h3>Burj Al Arab</h3>
                  <p>28 minutes away – 24 km</p>
                </li>
                <li data-aos="fade-up">
                  <h3>Downtown Dubai</h3>
                  <p>10 minutes away – 8.7 km</p>
                </li>
              </ul>
            </div>
            </div>
          </div>
      </section>

          {/* Premium Section */}
    <section className="premium-section">
      <div className="premium-outer">
        <div className="container">

          <h4 className="sub-heading">Discover a</h4>
          <h2 className="main-heading">Premium Lifestyle</h2>

          {/* CUSTOM PREV/NEXT BUTTONS */}
          <div className="premium-nav">
            <button className="premium-prev">
              <img src="/assets/homepage/left-icon.svg" alt="Previous" />
            </button>
            <button className="premium-next">
              <img src="/assets/homepage/right-icon.svg" alt="Next" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".premium-prev",
              nextEl: ".premium-next",
            }}
            pagination={{ clickable: true }}
            slidesPerView={3}
            spaceBetween={55}
            breakpoints={{
              1100: { slidesPerView: 3 },
              1024: { slidesPerView: 2 },
              688: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="premiumSwiper"
          >
            {premiumData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="premium-card">

                  {/* IMAGE + HOVER ENQUIRE */}
                  <div className="image-wrapper">
                    <img src={item.img} alt={item.title} />

                    {/* HOVER ENQUIRE BOX */}
                    <div className="enquire-box">ENQUIRE NOW!</div>
                  </div>

                  {/* TITLE */}
                  <h3 className="title">{item.title}</h3>
                  <p className="subtitle">{item.subtitle}</p>

                  {/* CONTENT */}
                  <div className="info-block">
                    <p className="lab-head">RANGING FROM</p>
                    <p className="label">
                      AED 2.24 M* | INR 5.3 CR* | USD 615 K* | EUR 549 K* | GBP 476 K*
                    </p>

                    <div className="icon-row">
                      <img src="/assets/homepage/zoom-icon.svg" alt="Zoom Icon" />
                      <p>From 869.9 Sq. Ft. &nbsp;&nbsp; From 808.2 Sq. M.</p>
                    </div>

                    <p className="lab-head">TO</p>
                    <p className="label">
                      AED 4.44 M* | INR 10.6 CR* | USD 1.22 M* | EUR 1.20 M* | GBP 989 K*
                    </p>

                    <div className="icon-row">
                      <img src="/assets/homepage/zoom-icon.svg" alt="Zoom Icon" />
                      <p>To 1719 Sq.Ft. &nbsp;&nbsp; To 1580.4 Sq. M.</p>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <p className="handover">Handover – March 2029</p>
                  <p className="note">*Subject to Availability</p>
                  <p className="note">*The global prices may vary as per the exchange rate</p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>



    {/* Video Section */}
      <section className="video-section">
          <div className="video-ball">
            <span className="ball-text">Play</span>
          </div>
          <div className="container">
            {/* Heading */}
            <div className="video-blk">
              <h2 className="video-heading" data-aos="fade-up">
                Step Into <span>A World Of Sophistication</span>
              </h2>

              {/* Video Block */}
              <div className="vdo-dec-blk">
                <div className="video-wrapper" data-aos="fade-up">
                  {!isPlaying ? (
                    <>
                     <img
                        src="/assets/homepage/stepvideo.png"
                        alt="Video Thumbnail"
                        className="video-thumbnail"
                        onClick={() => setIsPlaying(true)}
                      />
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
              </div>
            </div>
          </div>

          <div className="description-blk" >
            <div className="container">
              <div className="outer">
                <div className="video-description">
                  <p>
                    Sobha Hartland II is strategically located in the heart of Dubai,
                    making it an attractive investment opportunity. Its proximity to
                    major business districts, entertainment hubs, and key landmarks,
                    including Burj Khalifa, Dubai Waterfront, and more.
                  </p>
                  <AnimatedButton
                    label="Connect Us"
                    onClick={() => console.log("Button clicked")}
                  />
                </div>
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
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`lifestyle-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)} // 👈 Added click handler
            >
              <div className="lifestyle-header">
                <div className="left">
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </div>
                <h2>{item.title}</h2>
              </div>

              <div
                className="lifestyle-content"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${itemRefs.current[index]?.querySelector(".lifestyle-content").scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="image-blk">
                  <img src={item.image} alt={item.label} />
                </div>
                <div className="text-blk">
                  {item.text.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Luxury slider Section */}
      <div className="luxury-section">
      <div className="luxury-slider">
      <div className="container">
        <div className="top-swip-head" data-aos="fade-up">
          <h4>In the heart of</h4>
          <h3>Luxury</h3>
        </div>
        <Swiper
          modules={[FreeMode, Navigation]}
          // slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}  
          navigation={true}
          loop={true}
          className="luxury-swiper"
          data-aos="fade-up"
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
                <h4 data-aos="fade-left">Elegant Pool Area</h4>
                <p data-aos="fade-left">
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
                <h4 data-aos="fade-left">Grand Lobby</h4>
                <p data-aos="fade-left">Clique nas numerações do mapa para visualizar as áreas comuns.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Modern Lounge" />
              </div>
              <div className="luxury-slide-content">
                <h4 data-aos="fade-left">Modern Lounge</h4>
                <p data-aos="fade-left">Clique nas numerações do mapa para visualizar as áreas comuns.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="luxury-slide">
              <div className="luxury-img">
                <img src="/assets/homepage/swip1.png" alt="Exclusive Bar" />
              </div>
              <div className="luxury-slide-content">
                <h4 data-aos="fade-left">Exclusive Bar</h4>
                <p data-aos="fade-left">
                  Clique nas numerações do mapa para visualizar as áreas comuns.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      </div>

      {/* Faq Section */}
      <section className="faq-section">
          <div className="container">
        <div className="outer">
            <div className="faq-left" data-aos="fade-up">
              <p className="faq-subtitle">Got Questions?</p>
              <h2 className="faq-title">
                We've Got <br />
                <span>Answers!</span>
              </h2>
            </div>

            <div className="faq-right" data-aos="fade-up">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item  ${
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
          <div className="info-ball">
            <span className="ball-text">Connect</span>
          </div> 
        <div className="outer">
          <div className="container">
            <h2 data-aos="fade-up" className="info-title">Need more informations?</h2>
          </div>
        </div>
      </div>


    </main>
  );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./home.scss";
import "../styles/_community-sec.scss";
import "../styles/_accordian-sec.scss";
import "../styles/_luxury-sec.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {
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

  return (
    <main>
      {/* home banner */}
      <div className="home-banner">
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

  <div className="luxury-slider">
    <Swiper
      modules={[FreeMode, Navigation]}
      slidesPerView="auto"
      spaceBetween={20}
      centeredSlides={true}
      navigation={true}
      loop={true}
      className="luxury-swiper"
        avigation={{
        prevEl: '.luxury-prev', 
        nextEl: '.luxury-next',
      }}
      breakpoints={{
        0: { slidesPerView: 1.1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 18 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      <SwiperSlide>
        <div className="luxury-slide">
          <div className="luxury-img">
            <img src="/assets/homepage/swip1.png" alt="Pool Area" />
          </div>
          <div className="luxury-slide-content">
            <h4>Elegant Pool Area</h4>
            <p>Relax in a serene environment with modern design and natural lighting.</p>
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
            <p>Experience sophistication from the moment you enter.</p>
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
            <p>Comfort and style merge for the perfect social setting.</p>
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
            <p>Enjoy a curated selection of beverages in a cozy atmosphere.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    
      <div className="luxury-nav">
        <div className="luxury-prev swiper-button-prev"></div>
        <div className="luxury-next swiper-button-next"></div>
      </div>
  </div>




    </main>
  );
}

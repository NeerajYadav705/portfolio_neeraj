"use client";

import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add dark mode toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  // Check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1,
      x: "0%",
      right: "0%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
  }, [showContent]);

  const handleDownload = () => {
    const pdfUrl = "/Hero/Neeraj Yadav.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Neeraj_Yadav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!showContent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".sky", {
        x: xMove,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  return (
    <div className="overflow-x-hidden w-full">
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  NY
                </text>
              </g>
            </mask>
          </defs>
          <image
            href={isDarkMode ? "/bg.png" : "/bg.png"}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] overflow-hidden">
          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            {isDarkMode ? (
              <i className="ri-sun-line text-2xl text-white" />
            ) : (
              <i className="ri-moon-line text-2xl text-white" />
            )}
          </button>

          <div className="landing relative w-full h-screen bg-black overflow-hidden">
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover max-w-none"
                src={isDarkMode ? "/sky-dark.png" : "/sky.png"}
                alt="Sky"
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover max-w-none"
                src={isDarkMode ? "/darkbg.png" : "/bg.png"}
                alt="Background"
              />

              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-full md:w-1/2 px-4 md:pl-20">
                <div className="text-white flex flex-col gap-4 md:gap-6 text">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Hello, I'm{" "}
                    <span className="text-primary pricedown">Neeraj Yadav</span>
                  </h1>
                  <h2 className="text-2xl md:text-4xl text-gray-300">
                    Full Stack Developer
                  </h2>
                  <p className="text-base md:text-xl text-gray-400 max-w-lg">
                    I specialize in building modern web applications using
                    React, Next.js, and Node.js. Passionate about creating
                    clean, efficient, and user-friendly solutions that solve
                    real-world problems.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-6">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition text-center"
                    >
                      Hire Me
                    </Link>
                    <button
                      onClick={handleDownload}
                      className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-center"
                    >
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>

              <img
                className="absolute character -bottom-[150%] right-0 scale-[1] rotate-[-20deg] hidden md:block max-w-none"
                src="/boybg.png"
                alt="Character"
              />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-4 md:py-15 px-4 md:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-2xl md:text-4xl ri-arrow-down-line"></i>
                <h3 className="text-sm md:text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
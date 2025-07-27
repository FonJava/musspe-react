import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carrossel({
  images,
  width = "w-[300px]",
  height = "h-[300px]",
  showArrows = true,
  temLink = false,
  links = [],
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const interval = 7000;
  const slides = images;
  const slideCount = slides.length;

  // autoplay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, interval);
    return () => clearInterval(timer);
  }, [slideCount, interval, isPaused]);

  // Reset timer após pausa
  useEffect(() => {
    if (!isPaused) return;

    const resetTimer = setTimeout(() => {
      setIsPaused(false);
    }, interval);

    return () => clearTimeout(resetTimer);
  }, [isPaused, interval]);

  const nextSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < slideCount) {
      setIsPaused(true);
      setCurrentSlide(index);
    }
  };

  // handlers de swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      setIsPaused(true);
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }
    if (distance < -50) {
      setIsPaused(true);
      setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    }
  };

  return (
    <div className="flex items-center justify-center gap-[75px]">
      {showArrows && (
        <div
          className="hidden md:flex text-[#B89A9A] text-4xl font-barlow-bold border-[6px] border-[#8c4e2e] rounded-full w-[60px] h-[60px] pb-1 pr-1 justify-center items-center hover:text-[#FFDCD2] hover:border-[#cc7042] cursor-pointer transition-colors duration-200 mt-[-45px]"
          onClick={prevSlide}
        >
          &lt;
        </div>
      )}

      <div className="flex flex-col items-center">
        <div
          className={`relative overflow-hidden rounded-lg border-2 border-[#FFDCD2] ${width} ${height}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              height: "100%",
            }}
          >
            {slides.map((src, idx) =>
              temLink && links[idx] ? (
                <Link
                  key={idx}
                  to={links[idx]}
                  className="w-full h-full flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </Link>
              ) : (
                <img
                  key={idx}
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                  draggable="false"
                />
              )
            )}
          </div>
        </div>

        <div className="mt-3 mb-8">
          <ol className="flex items-center justify-center gap-2">
            {Array.from({ length: slideCount }).map((_, idx) => (
              <li
                key={idx}
                className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors duration-200 ${
                  currentSlide === idx ? "bg-[#cc7042]" : "bg-[#FFDCD2]"
                }`}
                onClick={() => goToSlide(idx)}
              ></li>
            ))}
          </ol>
        </div>
      </div>

      {showArrows && (
        <div
          className="hidden md:flex text-[#B89A9A] text-4xl font-barlow-bold border-[6px] border-[#8c4e2e] rounded-full w-[60px] h-[60px] pb-1 pl-1 justify-center items-center hover:text-[#FFDCD2] hover:border-[#cc7042] cursor-pointer transition-colors duration-200 mt-[-45px]"
          onClick={nextSlide}
        >
          &gt;
        </div>
      )}
    </div>
  );
}

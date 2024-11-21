import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage:
        "https://www.zimyo.com/wp-content/uploads/2023/07/calendar-computer-software-application-modish-schedule-planning-1-1.jpg",
      title: "Attendance Tracker",
      subtitle:
        "Welcome to the Attendance Tracker! Effortlessly manage and monitor attendance records in one place.",
    },
    {
      backgroundImage:
        "https://www.hono.ai/hubfs/Gen%20AI%20Attendance.jpg",
      title: "Attendance Tracker",
      subtitle:
        "Welcome to the Attendance Tracker! Effortlessly manage and monitor attendance records in one place.",
    },
    {
      backgroundImage:
        "https://t3.ftcdn.net/jpg/08/41/94/02/360_F_841940240_du0IkG8uLxvQYAupsYkd7p7LOPlOmoSa.jpg",
      title: "Attendance Tracker",
      subtitle:
        "Welcome to the Attendance Tracker! Effortlessly manage and monitor attendance records in one place.",
    },
    {
      backgroundImage:
        "https://t4.ftcdn.net/jpg/08/41/94/09/360_F_841940971_g2NXtAm41Iz8otnZf34T6oCOqrhk5MJB.jpg",
      title: "Attendance Tracker",
      subtitle:
        "Welcome to the Attendance Tracker! Effortlessly manage and monitor attendance records in one place.",
    },
    {
      backgroundImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMFOZQbF9sRPcID9Lp6FyBFMmNWQZrzw1IQ&s",
      title: "Attendance Tracker",
      subtitle:
        "Welcome to the Attendance Tracker! Effortlessly manage and monitor attendance records in one place.",
    },
    {
      backgroundImage:
        "https://www.timechamp.io/blogs/wp-content/uploads/2023/08/Online-Attendance-Management-System-1024x576.jpg",
      title: "Attendance Tracker",
      subtitle:
        "Welcome to the Attendance Tracker! Effortlessly manage and monitor attendance records in one place.",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="relative mt-[15px]">
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Background Slide */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Text content without container */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h1 className="font-extrabold text-5xl mb-4 tracking-wider drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-xl mb-6 leading-relaxed drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Slider;

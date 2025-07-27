import React, { useState, useEffect } from "react";
import bgEvent from "../images/bgEvent.png";

const EventAnnouncement: React.FC = () => {
  const eventDate = new Date("2024-07-31T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="container relative p-6 mx-auto mt-10 rounded-lg shadow-inner">
      <img
        src={bgEvent}
        alt="Event Background"
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="left-0 flex flex-col items-center justify-center w-full h-full p-6 text-yellow-700 rounded-lg top-5 md:absolute">
        <h2 className="mb-5 text-3xl font-bold text-center">
          Event Announcement (စာဖတ်သံ)
        </h2>
        <div className="mb-6 text-center">
          <p className="text-xl">Join us for our special event on</p>
          <p className="text-2xl font-bold">31 July 2024</p>
          <p>Location - American Center, Yangon</p>
          <p>Time - 1PM TO 4:30PM</p>
        </div>
        <div className="mb-6 text-center">
          <p className="text-lg ">
            We are thrilled to invite you to our event. Please mark your
            calendar and join us for a memorable experience.
            <br /> Stay tuned for more details!
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Countdown to Event: Finished
          </h3>
          <div className="flex flex-wrap justify-center space-x-2 text-xl">
            <div className="p-2 text-white bg-yellow-700 rounded-lg">
              <span>{timeLeft.days}</span> <span>Days</span>
            </div>
            <div className="p-2 text-white bg-yellow-700 rounded-lg">
              <span>{timeLeft.hours}</span> <span>Hours</span>
            </div>
            <div className="p-2 text-white bg-yellow-700 rounded-lg">
              <span>{timeLeft.minutes}</span> <span>Minutes</span>
            </div>
            <div className="p-2 text-white bg-yellow-700 rounded-lg">
              <span>{timeLeft.seconds}</span> <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAnnouncement;

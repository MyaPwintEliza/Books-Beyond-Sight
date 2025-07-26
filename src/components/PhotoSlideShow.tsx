import React, { useState, useEffect } from "react";

// Step 1: Import your photos
import Mem1 from "../images/Mem1.jpg";
import Mem2 from "../images/Mem2.jpg";
import Mem3 from "../images/Mem3.jpg";
import Mem4 from "../images/Mem4.jpg";
import Mem5 from "../images/Mem5.jpg";
import Mem6 from "../images/Mem6.jpg";
import Mem7 from "../images/Mem7.jpg";
import Mem8 from "../images/Mem8.jpg";
import Mem9 from "../images/Mem9.jpg";
import Mem10 from "../images/Mem10.jpg";
import Mem11 from "../images/Mem11.jpg";
import Mem12 from "../images/Mem12.jpg";
import Mem13 from "../images/Mem13.jpg";
import Mem14 from "../images/Mem14.jpg";
import Mem15 from "../images/Mem15.jpg";
import Mem16 from "../images/Mem16.jpg";
import Mem17 from "../images/Mem17.jpg";
import Mem18 from "../images/Mem18.jpg";
import Mem19 from "../images/Mem19.jpg";
import Mem20 from "../images/Mem20.jpg";
import Mem21 from "../images/Mem21.jpg";
import Mem22 from "../images/Mem22.jpg";
import Mem23 from "../images/Mem23.jpg";
import Mem24 from "../images/Mem24.jpg";
import Mem25 from "../images/Mem25.jpg";
import Mem26 from "../images/Mem26.jpg";
import Mem27 from "../images/Mem27.jpg";
import Mem28 from "../images/Mem28.jpg";

// Step 2: Add to array
const memoryPhotos = [
  Mem1,
  Mem2,
  Mem3,
  Mem4,
  Mem5,
  Mem6,
  Mem7,
  Mem8,
  Mem9,
  Mem10,
  Mem11,
  Mem12,
  Mem13,
  Mem14,
  Mem15,
  Mem16,
  Mem17,
  Mem18,
  Mem19,
  Mem20,
  Mem21,
  Mem22,
  Mem23,
  Mem24,
  Mem25,
  Mem26,
  Mem27,
  Mem28,
];

const PhotoSlideShow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % memoryPhotos.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10 overflow-hidden shadow-lg rounded-xl">
      <img
        src={memoryPhotos[current]}
        alt={`Memory ${current + 1}`}
        className="object-cover w-full transition duration-500"
      />

      <div className="absolute flex gap-1 transform -translate-x-1/2 bottom-4 left-1/2">
        {memoryPhotos.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlideShow;

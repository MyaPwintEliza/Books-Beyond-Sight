import React from "react";

// 🖼️ Day 1 photos
import Day1_1 from "../images/Day1.jpg";
import Day1_2 from "../images/Day1-2.jpg";
import Day1_3 from "../images/Day1-3.jpg";
import Day1_4 from "../images/Day1-4.jpg";
import Day1_5 from "../images/Day1-5.jpg";
import Day1_6 from "../images/Day1-6.jpg";
import Day1_7 from "../images/Day1-7.jpg";
import Day1_8 from "../images/Day1-8.jpg";
import Day1_9 from "../images/Day1-9.jpg";

// 📸 Day 2 photos
import Day2_1 from "../images/Day2-1.jpg";
import Day2_2 from "../images/Day2-2.jpg";
import Day2_3 from "../images/Day2-3.jpg";
import Day2_4 from "../images/Day2-4.jpg";
import Day2_5 from "../images/Day2-5.jpg";
import Day2_6 from "../images/Day2-6.jpg";
import Day2_7 from "../images/Day2-7.jpg";
import Day2_8 from "../images/Day2-8.jpg";
import Day2_9 from "../images/Day2-9.jpg";

// 🎤 Day 3 photos
import Day3_1 from "../images/Day3-1.jpg";
import Day3_2 from "../images/Day3-2.jpg";
import Day3_3 from "../images/Day3-3.jpg";
import Day3_4 from "../images/Day3-4.jpg";
import Day3_5 from "../images/Day3-5.jpg";
import Day3_6 from "../images/Day3-6.jpg";
import Day3_7 from "../images/Day3-7.jpg";
import Day3_8 from "../images/Day3-8.jpg";
import Day3_9 from "../images/Day3-9.jpg";
import Day3_10 from "../images/Day3-10.jpg";
import Day3_11 from "../images/Day3-11.jpg";
import Day3_12 from "../images/Day3-12.jpg";

// 💾 Grouped arrays
const day1Photos = [
  Day1_1,
  Day1_2,
  Day1_3,
  Day1_4,
  Day1_5,
  Day1_6,
  Day1_7,
  Day1_8,
  Day1_9,
];

const day2Photos = [
  Day2_1,
  Day2_2,
  Day2_3,
  Day2_4,
  Day2_5,
  Day2_6,
  Day2_7,
  Day2_8,
  Day2_9,
];

const day3Photos = [
  Day3_1,
  Day3_2,
  Day3_3,
  Day3_4,
  Day3_5,
  Day3_6,
  Day3_7,
  Day3_8,
  Day3_9,
  Day3_10,
  Day3_11,
  Day3_12,
];

// 🧱 Reusable Grid Component
const PhotoGrid = ({ photos, title }: { photos: string[]; title: string }) => (
  <div className="my-10">
    <h2 className="mb-4 text-3xl font-bold text-center">{title}</h2>
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
      {photos.map((photo, index) => (
        <div key={index} className="overflow-hidden shadow-md rounded-xl group">
          <img
            src={photo}
            alt={`${title} Photo ${index + 1}`}
            className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
);

// 🎉 Main Component
const EventGallery: React.FC = () => {
  return (
    <div className="pb-16">
      <h1 className="pt-10 text-3xl font-bold text-center text-yellow-700">
        Participating in the Differently Abled Art Project (January 2025)
      </h1>
      <p className="p-5 mx-5 text-base text-center md:text-xl md:mx-10">
        We proudly contributed to the Differently Abled Art Project in Yangon,
        supported by the U.S. Department of State’s Alumni Engagement Innovation
        Fund (AEIF). This initiative aimed to empower young artisans with
        disabilities through a series of workshops, exhibitions, and
        collaborative activities.
        <br />
        <br />
        On the 4th, 11th, and 12th of January 2025, Books Beyond Sight (BBS) led
        specialized workshops for visually impaired students. These workshops
        included Braille postcard creation, audio file donations, and
        distributing baked goods made by the students themselves.
        <br />
        <br />
        The event attracted around 350 attendees, fostering inclusivity and
        celebrating the remarkable talents of the visually impaired community.
      </p>
      <PhotoGrid photos={day1Photos} title="Day 1: Opening & Workshop" />
      <PhotoGrid
        photos={day2Photos}
        title="Day 2: Activities & Voice Recording"
      />
      <PhotoGrid photos={day3Photos} title="Day 3: Closing & Reflections" />
    </div>
  );
};

export default EventGallery;

import React from "react";
import photo1 from "../images/event8.jpg";
import photo2 from "../images/event2.jpg";
import photo3 from "../images/event3.jpg";
import photo4 from "../images/event1.jpg";
import photo5 from "../images/event4.jpg";
import photo7 from "../images/event6.jpg";
import photo8 from "../images/event7.jpg";
import photo9 from "../images/event9.jpg";
import photo10 from "../images/event10.jpg";
import photo11 from "../images/event11.jpg";
import photo12 from "../images/event12.jpg";
import photo13 from "../images/event13.jpg";
import Camphoto1 from "../images/Cam1.jpg";
import Camphoto2 from "../images/cam2.jpg";
import Camphoto3 from "../images/cam3.jpg";
import Camphoto4 from "../images/cam4.jpg";
import Camphoto5 from "../images/cam6.jpg";
import Camphoto6 from "../images/cam7.jpg";
// import Camphoto1 from "";
// import Camphoto1 from "";
// import Camphoto1 from "";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,

  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
];
const Camphotos = [
  Camphoto1,
  Camphoto2,
  Camphoto3,
  Camphoto4,
  Camphoto5,
  Camphoto6,
];

const PhotoGallery: React.FC = () => {
  return (
    <div>
      <h1 className="p-5 text-3xl font-bold text-center">
        Moments from (စာဖတ်သံ)
      </h1>
      <p className="p-5 mx-5 text-base text-center md:text-xl md:mx-10">
        We organized this event to support visually students with donations of
        audio books and essential educational resources. Our gallery highlights
        the meaningful interactions and joyful moments from our visit,
        showcasing the impact of our contributions.
      </p>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div>
        <h1 className="pt-10 text-3xl font-bold text-center">
          Memorable Moments from [ဖတ်ကြမယ်] Campaign
        </h1>
        <p className="p-5 mx-5 text-base text-center md:text-xl md:mx-10">
          We recently visited Kaewachan Blind School and Kyimanai Blind School
          to make donations and engage with the students. This gallery showcases
          the heartfelt moments and impactful experiences from our visit.
        </p>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
          {Camphotos.map((Camphoto, index) => (
            <div key={index} className="relative group">
              <img
                src={Camphoto}
                alt={`Camphoto ${index + 1}`}
                className="transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

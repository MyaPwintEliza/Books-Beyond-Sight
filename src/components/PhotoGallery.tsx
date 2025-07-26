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
        Moment from Voice of Reading Event (စာဖတ်သံ)
      </h1>
      <p className="p-5 mx-5 text-base text-center md:text-xl md:mx-10">
        On July 31, 2024, Books Beyond Sight (BBS) hosted its first on-ground
        initiative, the "စာဖတ်သံ - Voice of Reading" event, at the American
        Center Yangon. This event aimed to bridge visually impaired students'
        need for audiobooks with volunteers eager to donate their voices,
        raising awareness about voice donation and fostering empathy among
        youth. Organized as part of Ms. Khin Khin Kyaw’s follow-on community
        service project from the 2024 Myanmar Youth Leadership Program (MYLP),
        the event was funded by the U.S. Department of State’s Bureau of
        Educational and Cultural Affairs (ECA).
        <br />
        <br />
        Event Highlights Panel Discussion: Featured diverse guest speakers,
        including visually impaired writers, to inspire volunteerism and
        empathy. <br />
        <br />
        <b> Interactive Activities</b>: Simulated audiobook recording to engage
        attendees.
        <br /> <br /> <b>Slogan</b>: "သင့်ရဲ့စာဖတ်သံ ကျွန်ုပ်တိုရဲ့
        လမ်းပြအလင်းမှန်" ("Your reading voice is my guiding light") <br />
        <br />
        <b>Mission</b>: To raise awareness about audio accessibility for
        visually impaired students and inspire voice donation. <br />
        <br />
        <b>Vision</b>: To build a supportive community where visually impaired
        individuals access a variety of audiobooks read by dedicated volunteers,
        fostering inclusivity and empathy.
        <br />
        <br /> <b>Target Audience</b>: Youth aged 17–25 without sight issues,
        interested in voice donation. <br />
        <br />
        <b>Guests</b>: Youth, donors, and founders of disability-focused
        non-profits.
        <br />
        <br />
        <b>Guest Speakers</b>: Three authors, including one visually impaired
        writer.
        <br />
        <br /> <b>Event Impact</b>: Over 220 attendees without sight issues. 190
        applications for voice donation volunteers. Increased public awareness
        of voice donation.
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
          “Let’s Read” (Phat Kya Mal) Donation Campaign
        </h1>
        <p className="p-5 mx-5 text-base text-center md:text-xl md:mx-10">
          On August 3, 2024, Books Beyond Sight (BBS) organized the "Let’s Read"
          (Phat Kya Mal) donation campaign at Kawechan and Kyimyindaing Blind
          Schools, reaching approximately 400 visually impaired students. The
          campaign provided essential resources, including access to audiobooks,
          stationery, and food, while gathering valuable feedback on audiobook
          preferences and genres.
          <br />
          <br />
          It also facilitated discussions on the rules and requirements for
          voice donation, fostering greater awareness and understanding among
          volunteers. The event successfully delivered 500 non-academic and 13
          academic audiobooks, engaged with potential partners and sponsors, and
          strengthened the network supporting visually impaired students.
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

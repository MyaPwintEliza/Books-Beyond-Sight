//
import helping from "../images/helping5.png";
import mission from "../images/mission.png";
import { FaRegEdit } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { RiUserHeartLine } from "react-icons/ri";
import slide from "../images/slide.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

function BodySection() {
  return (
    <div className="px-5 text-center">
      <div className="flex flex-col items-center mt-20 italic md:flex-row">
        <div className="md:basis-1/2">
          <h1 className="text-3xl font-bold text-center text-yellow-700 capitalize md:text-5xl">
            Giving Help to those<pre></pre> who need it
          </h1>
          <p className="mx-5 mt-5 text-base md:text-xl md:mx-10">
            In Myanmar, many students, particularly those with visual
            impairments, face significant barriers to accessing quality
            education. These challenges can limit their opportunities and hinder
            their potential. The Books Beyond Sight (BBS) organization is
            dedicated to addressing these issues by providing free, high-quality
            audiobooks to visually impaired students across the country. By
            connecting passionate volunteers with schools for the blind, BBS
            ensures that students have access to essential literature and
            educational materials through recorded voices.
          </p>
        </div>
        <div className="mt-5 md:basis-1/3 md:mt-0 md:mx-24">
          <img src={helping} alt="Helping Hands" className="w-full md:w-auto" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center mt-10 italic md:flex-row">
          <div className="mt-5 md:basis-1/2 md:mt-0 md:mx-24">
            <img
              src={mission}
              alt="Helping Hands"
              className="w-full md:w-auto"
            />
          </div>
          <div className="md:basis-1/2">
            <h1 className="text-3xl font-bold text-center text-yellow-700 capitalize md:text-5xl">
              Our Mission
            </h1>
            <p className="mx-5 mt-5 text-base md:text-xl md:mx-10">
              Our mission is to enhance the educational experience and improve
              the quality of life for visually impaired students by providing
              free, high-quality audio books. We connect dedicated volunteers
              with a passion for reading to schools for the blind, enabling
              access to literature and educational materials through their
              recorded voices. Through our efforts, we aim to empower visually
              impaired students to achieve their full potential and foster a
              more inclusive society.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-5 text-3xl font-bold text-center text-yellow-700 capitalize md:text-5xl">
          Why Donate to BSS?
        </h1>
        <div className="flex flex-col items-center justify-between w-full mt-10 text-left md:flex-row">
          <div className="w-full mt-5 bg-yellow-100 shadow-xl card md:w-72 h-76 md:mt-20">
            <div className="p-10 mx-auto card-body">
              <FaRegEdit size={36} />
              <h2 className="text-2xl font-bold text-yellow-700 card-title">
                Effortless Book <br /> Donations
              </h2>
              <p className="text-lg">
                Donate simply by recording audio books. No complex processes,
                coding, or technical knowledge required. Just your voice making
                a difference.
              </p>
            </div>
          </div>
          <div className="w-full mt-5 bg-yellow-100 shadow-xl card md:w-72 h-76">
            <div className="p-10 mx-auto card-body">
              <GoTag size={36} />
              <h2 className="text-2xl font-bold text-yellow-700 card-title">
                Affordable and Flexible Giving
              </h2>
              <p className="text-lg">
                Our donation model adapts to your generosity. Whether it's
                through audiobooks or monetary support, there are no hidden
                costs — only transparent giving.
              </p>
            </div>
          </div>
          <div className="w-full mt-5 bg-yellow-100 shadow-xl card md:w-72 h-76 md:mt-5">
            <div className="p-10 mx-auto card-body">
              <GrLineChart size={36} />
              <h2 className="text-2xl font-bold text-yellow-700 card-title">
                Empowering Accessibility
              </h2>
              <p className="text-lg">
                Your donations empower visually impaired students with essential
                literature, bridging educational gaps and fostering a more
                inclusive society.
              </p>
            </div>
          </div>
          <div className="w-full mt-5 bg-yellow-100 shadow-xl card md:w-72 h-76 md:mt-28">
            <div className="p-10 card-body">
              <RiUserHeartLine size={36} />
              <h2 className="text-2xl font-bold text-yellow-700 card-title">
                Dedicated Assistance
              </h2>
              <p className="text-lg">
                Our team provides dedicated support and guidance, ensuring your
                donation experience is seamless and meaningful.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-10 carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src={slide} className="object-cover w-full" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="object-cover w-full" />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="object-cover w-full" />
        </div>
      </div> */}
      <div className="mt-10 carousel carousel-center rounded-box">
        <div className="w-full carousel-item sm:w-1/2 md:w-1/3">
          <img src={slide} className="object-cover w-full sm:h-72 " />
        </div>
        <div className="w-full carousel-item sm:w-1/2 md:w-1/3">
          <img src={slide2} className="object-cover w-full sm:h-72 " />
        </div>
        <div className="w-full carousel-item sm:w-1/2 md:w-1/3">
          <img src={slide3} className="object-cover w-full sm:h-72 " />
        </div>
        <div className="w-full carousel-item sm:w-1/2 md:w-1/3">
          <img src={slide3} className="object-cover w-full sm:h-72 " />
        </div>
        <div className="w-full carousel-item sm:w-1/2 md:w-1/3">
          <img src={slide3} className="object-cover w-full sm:h-72 " />
        </div>
        <div className="w-full carousel-item sm:w-1/2 md:w-1/3">
          <img src={slide3} className="object-cover w-full sm:h-72 " />
        </div>
      </div>
    </div>
  );
}

export default BodySection;

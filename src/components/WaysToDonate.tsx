import React from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineRoom } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";

const WaysToDonate: React.FC = () => {
  return (
    <div className="container p-6 mx-auto mt-10 rounded-lg ">
      <h2 className="mb-6 text-5xl font-bold text-center text-yellow-700">
        Ways to Donate
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md sm:w-1/2 md:w-1/4">
          <div className="mb-4 text-5xl">
            <MdKeyboardVoice />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-yellow-700">
            Record Your Voice
          </h3>
          <p className="text-sm text-center">
            Use your preferred recording device or app to create your audio
            message. Ensure it is clear and audible.
          </p>
        </div>

        <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md sm:w-1/2 md:w-1/4">
          <div className="mb-4 text-5xl">
            <RiUserVoiceFill />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-yellow-700">
            Visit Our Studio
          </h3>
          <p className="text-sm text-center">
            Schedule an appointment to visit our studio and record your voice
            message or read a book aloud.
          </p>
        </div>
        <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md sm:w-1/2 md:w-1/4">
          <div className="mb-4 text-5xl">
            <MdOutlineRoom />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-yellow-700">
            Monetary In-Person Donation
          </h3>
          <p className="text-sm text-center">
            Visit our office to make a donation in person. We would love to meet
            you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaysToDonate;

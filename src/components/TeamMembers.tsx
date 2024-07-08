import React from "react";
import founder from "../images/founder.jpg";
import me from "../images/me.jpg";

const TeamMembers: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="mt-5 text-3xl font-bold text-center text-yellow-700 capitalize md:text-5xl">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-56 mt-10 ml-8">
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="rounded-full h-36 w-36 ring ring-yellow-700 ring-offset-2">
              <img src={founder} />
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-xl font-semibold">Khin Khin Kyaw</h3>
            <p className="text-sm">Founder & CEO</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="rounded-full h-36 w-36 ring ring-yellow-700 ring-offset-2">
              <img src={me} />
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-xl font-semibold">Mya Pwint Thet Tin</h3>
            <p className="text-sm">Frontend Developer & Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

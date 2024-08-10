import banner from "../images/banner.png";

function HeroSection() {
  return (
    <div className="">
      <div className="m-5 mt-24 md:absolute md:mt-32 font-primary">
        <h2 className="text-2xl text-black uppercase md:text-4xl md:text-white">
          "Together, we can create
        </h2>
        <h2 className="text-xl font-bold text-black uppercase md:text-3xl md:px-10 md:text-white">
          a world of________ song and sight"
        </h2>
        <p className="mt-5 text-sm italic font-normal text-black md:text-base md:mt-5 md:px-7 md:text-white ">
          Our Non-Profit Youths Organization is for Visually Impaired<pre></pre>
          Students all over the Country. We dedicated to<pre></pre>
          bridging young visually impaired students with <pre></pre>a need for
          audiobooks and volunteers who eager to donate their voices.
        </p>
        <button className="mt-5 btn btn-warning md:mt-7 md:mx-7">
          <a
            href="https://www.facebook.com/profile.php?id=61561124702080&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            Donate Your Voice
          </a>
        </button>

        {/* <div className="mt-10 shadow stats md:mx-7">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="text-yellow-800 stat-value">2.2K</div>
            <div className="stat-desc">90% more than last month (facebook)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="text-yellow-500 stat-value">2.5k</div>
            <div className="stat-desc">95% more than last month (facebook)</div>
          </div>
        </div> */}
        <div className="flex flex-col mt-10 shadow stats md:flex-row md:mx-7">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="text-yellow-800 stat-value">2.5K</div>
            <div className="stat-desc">90% more than last month (facebook)</div>
          </div>

          <div className="mt-5 stat md:mt-0 md:ml-5">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Followers</div>
            <div className="text-yellow-500 stat-value">3.1k</div>
            <div className="stat-desc">95% more than last month (facebook)</div>
          </div>
        </div>
      </div>
      <img src={banner} className="w-full bg-center bg-cover" />
    </div>
  );
}

export default HeroSection;

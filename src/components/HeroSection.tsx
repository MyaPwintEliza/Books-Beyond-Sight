// import banner from "../images/banner.png";

// function HeroSection() {
//   return (
//     <div>
//       <div className="absolute mt-32 m-5 font-primary">
//         <h2 className="text-5xl text-white uppercase">
//           "Together, we can create
//         </h2>
//         <h2 className="text-4xl px-10 font-bold text-white uppercase">
//           a world of________ song and sight"
//         </h2>
//         <p className="text-xl mt-10 font-normal px-7 italic text-white">
//           Our Non-Profit Youths Organization is for Visually Impaired<pre></pre>
//           Students all over the Country. We dedicated to<pre></pre>
//           bridging young visually impaired students with <pre></pre>a need for
//           audiobooks and volunteers who eager to donate their voices.
//         </p>
//         <button className="btn btn-warning mt-10 mx-7 flex flex-col">
//           Donat Your Voice
//         </button>

//         <div className="stats shadow mx-7 mt-10">
//           <div className="stat">
//             <div className="stat-figure text-primary">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="inline-block h-8 w-8 stroke-black"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="stat-title">Total Likes</div>
//             <div className="stat-value text-yellow-800">2.2K</div>
//             <div className="stat-desc">21% more than last month (facebook)</div>
//           </div>

//           <div className="stat">
//             <div className="stat-figure text-secondary">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="inline-block h-8 w-8 stroke-black"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="stat-title">Page Views</div>
//             <div className="stat-value text-yellow-500">2.5k</div>
//             <div className="stat-desc">21% more than last month (facebook)</div>
//           </div>
//         </div>
//       </div>
//       <img src={banner} className=" bg-cover w-full bg-center" />
//     </div>
//   );
// }

// export default HeroSection;

import banner from "../images/banner.png";

function HeroSection() {
  return (
    <div className="relative">
      <div className="md:absolute mt-16 md:mt-32 m-5 font-primary">
        <h2 className="text-2xl md:text-5xl md:text-white text-black uppercase">
          "Together, we can create
        </h2>
        <h2 className="text-xl md:text-4xl md:px-10 font-bold  md:text-white text-black  uppercase">
          a world of________ song and sight"
        </h2>
        <p className="text-sm md:text-xl mt-5 md:mt-10 font-normal md:px-7 italic  md:text-white text-black ">
          Our Non-Profit Youths Organization is for Visually Impaired<pre></pre>
          Students all over the Country. We dedicated to<pre></pre>
          bridging young visually impaired students with <pre></pre>a need for
          audiobooks and volunteers who eager to donate their voices.
        </p>
        <button className="btn btn-warning mt-5 md:mt-10 md:mx-7 flex flex-col">
          Donate Your Voice
        </button>

        {/* <div className="stats shadow md:mx-7 mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-black"
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
            <div className="stat-value text-yellow-800">2.2K</div>
            <div className="stat-desc">21% more than last month (facebook)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-black"
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
            <div className="stat-value text-yellow-500">2.5k</div>
            <div className="stat-desc">21% more than last month (facebook)</div>
          </div>
        </div> */}

        <div className="stats shadow md:mx-7 mt-10">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-black"
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
            <div className="stat-value text-yellow-800">2.2K</div>
            <div className="stat-desc">90% more than last month (facebook)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-black"
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
            <div className="stat-value text-yellow-500">2.5k</div>
            <div className="stat-desc">95% more than last month (facebook)</div>
          </div>
        </div>
      </div>
      <img src={banner} className="bg-cover w-full bg-center" />
    </div>
  );
}

export default HeroSection;

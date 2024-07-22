import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 bg-white navbar ">
      <div className="navbar-start">
        <div className="">
          <h4 className="text-xl font-bold text-yellow-700 md:mx-10 font-primary">
            Books Beyond Sight
          </h4>
        </div>
      </div>
      <div className="navbar-center">
        <img src={logo} className="w-20" />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

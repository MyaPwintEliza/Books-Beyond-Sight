import logo from "../images/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="items-center p-4 footer bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <img src={logo} className="w-20" />
        <p>
          Copyright © 2024 - All right reserved <br />
          booksbeyondsightorg@gmail.com <br />
          <p className="mt-2 text-xs">Developed by Mya Pwint Thet Tin</p>
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a target="_blank" href="https://www.youtube.com/@BooksBeyondSight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61561124702080&mibextid=LQQJ4d"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/booksbeyondsightorg?igsh=MWVneGMwZTBkYW01bw=="
        >
          <AiFillInstagram size={30} className="pb-1" />
        </a>
        <a target="_blank" href="https://t.me/booksbeyondsight">
          <FaTelegramPlane size={30} className="pb-1" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar w-full h-30 flex flex-row justify-between items-center text-black p-10 shadow-md">
      <div className="text-3xl poppins-regular">Kurt Matthew Amodia</div>
      <div className="w-2/3 flex flex-row justify-end gap-20 poppins-extralight">
        <a
          href="#home"
          className="transform transition duration-500 hover:scale-120"
        >
          Home
        </a>
        <a
          href="#experience"
          className="transform transition duration-500 hover:scale-120"
        >
          Experience
        </a>
        <a
          href="#education"
          className="transform transition duration-500 hover:scale-120"
        >
          Education
        </a>
        <a
          href="#projects"
          className="transform transition duration-500 hover:scale-120"
        >
          Projects
        </a>
        <a
          href="#footer"
          className="transform transition duration-500 hover:scale-120"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default NavBar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <div className="cover width-full h-170 flex justify-center items-center">
        <div className="flex flex-row w-2/3 h-120 mt-47 bg-white justify-between items-center rounded-md shadow-md">
          <div className="pic-container w-1/2 h-full flex justify-center items-center border-r-2">
            <img
              src="dist/images/my-pic.JPG"
              alt="my-pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full details flex flex-col">
            <div className="pl-20 flex flex-col gap-2">
              <h2 className="text-3xl mt-15 poppins-extralight">
                Kurt Matthew Amodia
              </h2>
              <h2 className="text-sm mb-5 poppins-light">
                ASPIRING SOFTWARE ENGINEER/DATA ANALYST
              </h2>
              <p className="text-sm poppins-semibold">Phone:</p>
              <p href="https://github.com/kurtamodia" className="poppins-light">
                09983444136
              </p>
              <p className="text-sm poppins-semibold">Email:</p>
              <p href="https://github.com/kurtamodia" className="poppins-light">
                kurtmatthewamodia@gmail.com
              </p>
              <p className="text-sm poppins-semibold">Address:</p>
              <p href="https://github.com/kurtamodia" className="poppins-light">
                Baliko St., Poblacion, Ubay, Bohol
              </p>
              <p className="text-sm poppins-semibold">Date of Birth:</p>
              <p href="https://github.com/kurtamodia" className="poppins-light">
                December 04, 2002
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="socials-container flex justify-center items-center">
        {" "}
        <div className="socials w-2/3 h-20 flex justify-center items-center bg-black text-white text-3xl gap-10">
          <a href="https://www.linkedin.com/in/kurt-matthew-amodia-4450852b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9Md0srO1SwGa5ahVPcIPTg%3D%3D">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ainzzcutie">
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/kurtmatthew.amodia.1">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/kurtamodia/">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="description w-full h-100 flex flex-col justify-center items-center p-10 shadow-md">
        <h2 className="text-2xl poppins-regular mb-10">Hello! I'm Kurt</h2>
        <p className="w-1/3 text-md poppins-light text-center">
          I hold a Bachelor of Science in Computer Science from the University
          of the Philippines. I have hands-on experience in web development and
          am currently expanding my skill set in data analysis, driven by a
          strong eagerness to learn and grow in this field.
        </p>
      </div>
    </>
  );
}

export default Home;

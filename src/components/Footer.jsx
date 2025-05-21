import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer class="bg-white shadow-sm dark:bg-gray-900 flex justify-center items-center">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-center">
          <div className="socials-container flex justify-center items-center dark:bg-gray-900">
            {" "}
            <div className="socials-footer w-full h-20 flex justify-center items-center text-white text-3xl gap-10 dark:bg-gray-900">
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
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Kurt Matthew Amodia
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

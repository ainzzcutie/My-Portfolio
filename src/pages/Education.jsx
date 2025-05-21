import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faDatabase,
  faBuildingColumns,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCss3Alt,
  faHtml5,
  faReact,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

function Education() {
  return (
    <>
      <div className="education-section w-full h-180 flex flex-col items-center">
        <div className="w-300 h-20 border-b-2 border-solid border-blue-200 flex justify-center items-center text-xl poppins-semibold p-15">
          EDUCATION
        </div>
        <div className="timeline w-full p-30 flex justify-center items-center">
          <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-5 flex items-center mb-5 justify-center w-15 h-15 bg-white-100 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-gray-900 text-4xl shrink-0">
                  <FontAwesomeIcon icon={faSchool} />
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 class="text-md poppins-semibold">
                  Philippine Science High School Central Visayas Campus
                </h3>
                <p className="text-sm poppins-light">STEM Strand</p>
                <time class="block mb-2 text-sm poppins-extralight leading-none text-gray-400 dark:text-gray-500">
                  July 2015 - June 2021
                </time>
                <div className="w-30 pt-5 flex flex-col gap-2">
                  <h2 className="text-md poppins-semibold">Skills</h2>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    HTML
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faHtml5} />
                    </span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    CSS
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faCss3Alt} />
                    </span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center w-35  px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Arduino
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faMicrochip} />
                    </span>
                  </button>
                </div>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-5 flex items-center mb-5  justify-center w-15 h-15 bg-white-100 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-gray-900 text-4xl shrink-0">
                  <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 class="text-md poppins-semibold">
                  University of the Philippines Visayas
                </h3>
                <p className="text-sm poppins-light">BS Computer Science</p>
                <time class="block mb-2  text-sm poppins-extralight leading-none text-gray-400 dark:text-gray-500">
                  2021 - 2025
                </time>
                <div className="w-30 pt-5 flex flex-col gap-2">
                  <h2 className="text-md poppins-semibold">Skills</h2>
                  <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    React
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faReact} />
                    </span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center w-35 px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    NodeJS
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faNodeJs} />
                    </span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center w-35 px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    MySQL
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faDatabase} />
                    </span>
                  </button>
                </div>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-5 flex items-center mb-5  justify-center w-15 h-15 bg-white-100 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-gray-900 text-4xl shrink-0">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 class="text-md poppins-semibold">DataCamp</h3>
                <p className="text-sm poppins-light">Data Analytics</p>
                <time class="block mb-2 text-sm poppins-extralight leading-none text-gray-400 dark:text-gray-500">
                  2025 -
                </time>
                <div className="w-30 pt-5 flex flex-col gap-2">
                  <h2 className="text-md poppins-semibold">Skills</h2>
                  <button
                    type="button"
                    class="inline-flex items-center w-35  px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Numpy
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faPython} />
                    </span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center w-35  px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Pandas
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faPython} />
                    </span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center w-40 px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    PostgreSQL
                    <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                      <FontAwesomeIcon icon={faDatabase} />
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Education;

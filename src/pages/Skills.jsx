import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <>
      <div className="skills-section w-full h-120 flex flex-col items-center">
        <div className="w-300 h-20 border-b-2 border-solid border-blue-200 flex justify-center items-center text-xl poppins-semibold p-15">
          SKILLS
        </div>
        <div className="w-200 flex flex-col justify-center items-center">
          <div className="container w-200 pt-30 flex justify-center items-center gap-10">
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
              class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              TailwindCSS
              <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faReact} />
              </span>
            </button>
            <button
              type="button"
              class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              NodeJS
              <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faReact} />
              </span>
            </button>
          </div>
          <div className="container w-200 pt-10 flex justify-center items-center gap-10">
            <button
              type="button"
              class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              PostgreSQL
              <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faReact} />
              </span>
            </button>
            <button
              type="button"
              class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Pandas
              <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faReact} />
              </span>
            </button>
            <button
              type="button"
              class="inline-flex items-center px-5 py-2.5 text-sm poppins-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Numpy
              <span class="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faReact} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

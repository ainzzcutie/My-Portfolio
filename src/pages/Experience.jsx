function Experience() {
  return (
    <>
      <div className="experience-section w-full h-130 flex flex-col items-center">
        <div className="w-300 h-20 border-b-2 border-solid border-blue-200 flex justify-center items-center text-xl poppins-semibold p-15">
          EXPERIENCE
        </div>
        <div className="timeline w-2/3 p-10">
          <ol class="experience-list relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 class="text-lg poppins-semibold">Software Engineer Intern</h3>
              <p className="text-md poppins-light">
                Seaversity, Inc. - Internship
              </p>
              <time class="block text-sm poppins-extralight leading-none text-gray-400 dark:text-gray-500">
                June 2024 - July 2024
              </time>
              <p className="text-sm poppins-extralight text-gray-400 dark:text-gray-500">
                Manila, Philippines - Remote
              </p>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <ul className="list-disc pl-10 pt-10 poppins-light">
                  <li className="p-2">
                    Participated in technical training sessions to gain
                    proficiency in the company’s tech stack.{" "}
                  </li>
                  <li className="p-2">
                    Developed and practiced building web applications using
                    VueJS, Nuxt, TailwindCSS, and Figma.
                  </li>
                  <li className="p-2">
                    Improved productivity by utilizing project management and
                    bug-tracking software to manage tasks, patches, and feature
                    requests.
                  </li>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Experience;

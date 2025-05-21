import ProjectCarousel from "../components/ProjectCarousel";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import {
  faCss3Alt,
  faHtml5,
  faReact,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const projects = [
    {
      name: "Magsasakay",
      description: "A web application for Iloilo routing navigation.",
      date: "2024",
      link: "https://github.com/ainzzcutie/Magsasakay",
      icon: [faReact, faNodeJs],
    },
    {
      name: "Craveins",
      description:
        "A beginner web application project using HTML, CSS, and JS.",
      date: "2023",
      link: "https://github.com/ainzzcutie/craveins",
      icon: [faHtml5, faCss3Alt],
    },
    {
      name: "Isko Runner",
      description: "A game project created using Python frameworks.",
      date: "2022",
      link: "https://github.com/ainzzcutie/isko-runner",
      icon: [faPython],
    },
    {
      name: "Netflix Movies and TV Shows Data Analysis using PostgreSQL",
      description:
        "This project involves comprehensive data analysis of Netflix's movies and TV shows using PostgreSQL.",
      date: "May 2025",
      link: "https://github.com/ainzzcutie/netflix_postgresql_project",
      icon: faDatabase,
    },
    {
      name: "Analyzing Product Sales using Pandas and Seaborn Visualization",
      description:
        "Conducted data validation and cleaning on raw datasets to prepare them for exploratory data analysis aimed at addressing key business questions.",
      date: "May 2025",
      link: "https://github.com/ainzzcutie/Analyzing-Product-Sales-",
      icon: faPython,
    },
    {
      name: "Hypothesis Testing in Python",
      description:
        "This project blends statistical rigor with journalistic curiosity, offering insights that challenge assumptions and spark meaningful conversations around trends in global football.",
      date: "2025",
      link: "https://github.com/ainzzcutie/Hypothesis-Testing-in-Python",
      icon: [faPython],
    },
  ];

  return (
    <>
      <div className="underlay w-full h-150 flex flex-col items-center justify-center">
        <div className="w-full h-full bg-gray-100/10 flex flex-col items-center">
          <div className="w-300 h-20 border-b-2 border-solid border-blue-200 flex justify-center items-center text-xl text-white poppins-semibold p-15">
            PROJECTS
          </div>
          <div className="card-container w-full h-full flex flex-wrap justify-center gap-10 mt-20">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Binary Search",
    description: "Binary Search Algorithm for Python",
    url: "https://github.com/jeffahn1/binary-search",
  },
  {
    title: "Deduplicate CSV File",
    description: "Deduplicate rows in CSV file using python's csv package",
    url: "https://github.com/jeffahn1/dedepulicator/blob/main/deduplicator.py",
  },
  {
    title: "Birthday Reminder",
    description:
      "Birthday Reminder using Python to email a notification to my email one day prior to the birthday",
    url: "https://github.com/jeffahn1/birthday_1dayprior",
  },
  {
    title: "Filter CSV File",
    description:
      "Filter CSV file using python's csv package and write to new CSV file based on certian keywords",
    url: "https://github.com/jeffahn1/csv_to_python",
  },
];

const Projects = () => {
  return (
    <div className="space-y-2 relative mb-10">
      <h2 className="text-xl text-center font-bold text-gray-400 mb-2">
        Python Projects
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

export function Project({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <div className="space-y-2 p-2 border rounded-xl border-cyan-500 relative flex flex-col justify-between mb-20">
      <h3 className="text-lg text-center font-bold text-gray-400 cursor-pointer">
        <a href={url} className="underline hover:text-cyan-800">
          {title}
        </a>
      </h3>
      <p className="text-center text-gray-300">{description}</p>
      {/* github icon */}
      <a
        href={url}
        className="underline bottom-0 self-end text-cyan-500 hover:text-cyan-800 cursor-pointer"
      >
        {" "}
        <FaGithub />{" "}
      </a>
    </div>
  );
}

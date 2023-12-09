"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Binary Search",
    description: "Binary Search Algorithm for Python",
    url: "https://github.com/jeffahn1/binary-search",
    image:
      "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deduplicate CSV File",
    description: "Deduplicate rows in CSV file using python's csv package",
    url: "https://github.com/jeffahn1/dedepulicator/blob/main/deduplicator.py",
    image:
      "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Birthday Reminder",
    description:
      "Birthday Reminder using Python to email a notification to my email one day prior to the birthday",
    url: "https://github.com/jeffahn1/birthday_1dayprior",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Filter CSV File",
    description:
      "Filter CSV file using python's csv package and write to new CSV file based on certian keywords",
    url: "https://github.com/jeffahn1/csv_to_python",
    image:
      "https://images.unsplash.com/photo-1517512006864-7edc3b933137?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  return (
    <div className="space-y-2 relative pb-10">
      {/* <h2 className="text-xl text-center font-bold text-gray-400 mb-4"></h2> */}
      <h2 className="font-bold text-xl text-gray-300">Python Projects</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project) => (
          // <CardDefault
          //   key={project.title}
          //   title={project.title}
          //   description={project.description}
          //   url={project.url}
          //   image={project.image}
          //   icon={<FaGithub />}
          // />
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            image={project.image}
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
  image,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
}) {
  return (
    <div className="space-y-2 p-2 border rounded-xl border-cyan-500 relative flex flex-col justify-between">
      <div className="h-40 w-full rounded-xl overflow-hidden">
        <img src={image} alt="project" className="w-full h-full" />
      </div>
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

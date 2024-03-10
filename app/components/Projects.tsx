"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = {
  'python':[
    {
      title: "Binary Search",
      description: "Binary Search Algorithm for Python",
      url: "https://github.com/jeffahn1/binary-search",
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2020/08/wormhole-41-1.jpg?quality=90&strip=all&w=1200://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "CSV File Deduplicator",
      description: "Deduplicate rows in CSV file using the csv package Python library",
      url: "https://github.com/jeffahn1/dedepulicator",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxujz4bCZKVCJcClFmgelgGyRrnBwJFqf3VQ8n24qyZ0ZyElSrFNkhcHExNzcnyxxNZRs&usqp=CAU"
    },
    {
      title: "Data Type File Organizer",
      description:
        "Organize storage of local files by type of data with Python",
      url: "https://github.com/jeffahn1/file_organizer",
      image:
        "https://static.vecteezy.com/system/resources/previews/016/060/118/non_2x/concept-document-management-online-document-database-and-digital-file-storage-systems-or-software-record-keeping-database-technology-file-access-document-sharing-vector.jpg",
    },
    {
      title: "Filter CSV File",
      description:
        "Filter CSV file with Python's csv package and write to new CSV file with user keyword input",
      url: "https://github.com/jeffahn1/csv_to_python",
      image:
        "https://images.unsplash.com/photo-1517512006864-7edc3b933137?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Photo Editor",
      description:
        "Sharpen your Photo Files with Python",
      url: "https://github.com/jeffahn1/photo_editor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNwTHZYqhWlBjPDbhpoQUIf0sDpGg6CvnQXhvQE_crTSGJtN0ohRanixNTdi8Q9hwspU&usqp=CAU",
    },
    {
      title: "Birthday Reminder",
      description:
        "Make Python remind you by email one day prior to a friend's birthday",
      url: "https://github.com/jeffahn1/birthday_1dayprior",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  javascript:[
    {
      title: "LinkedIn Profile Scraper",
      description:
        "Use JavaScript to collect Linkedin profile data",
      url: "https://github.com/jeffahn1/linkedin_scraper",
      image:
        "https://www.stupidproxy.com/wp-content/uploads/2021/11/LinkedIn-proxies-for-Scraping-LinkedIn.jpg",
    },
    {
      title: "Reading List App",
      description:
        "Web app designed for book enthusiasts to keep a list of their readings",
      url: "https://github.com/jeffahn1/cs50_final_project",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*V9GdNPhBPL0p-wgL3hMdwQ.png",
    },
    {
      title: "Movie Search App",
      description:
        "Use this live database API to find your favorite movies",
      url: "https://github.com/jeffahn1/movie_app",
      image:
        "https://blog.logrocket.com/wp-content/uploads/2020/11/movie-search-app.png",
    },
  ]
}

const Projects = () => {
  return (
    <div className="space-y-2 relative pb-10">
  
      <h2 className="font-bold text-xl text-gray-300 text-center">
        Python Projects
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {projects.python.map((project) => (

          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            image={project.image}
          />
        ))}
      </div>
      <h2 className="font-bold text-xl text-gray-300 text-center">
        Web Projects
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {projects.javascript.map((project) => (
       
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

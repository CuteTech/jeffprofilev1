"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";

const certs = [
  {
    name: "Certified Python Developer: W3Schools",
    url: "https://verify.w3schools.com/1OC385OJZG",
    image:
      "https://verify.w3schools.com/1OC385OJZG/certificate_of_completion_python.jpg",
  },
];

function Certificates() {
  return (
    <div className="pb-10">
      <Typography variant="h2" color="blue-gray" className="mb-2 text-center ">
        Certificates
      </Typography>
      <div className="flex flex-col justify-center items-center  relative">
        {certs.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col justify-center items-center relative mt-4"
          >
            <a href={cert.url} target="_blank">
              <img src={cert.image} className="w-96" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;

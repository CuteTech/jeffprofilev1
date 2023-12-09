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
      <h2 className="font-bold text-xl text-gray-300 text-center">
        Certificates{" "}
      </h2>
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

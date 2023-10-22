import Image from "next/image";
import CenteredDiv from "./components/CenteredDiv";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <div className="w-full px-10">
      {/* heading contact */}
      <div className="flex justify-between w-full  py-2">
        <div>
          <Image
            src="/logo.png"
            alt="Next.js Logo"
            width={40}
            height={27}
            priority
          />
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/jeff-j-ahn/" target="_blank">
            <FaLinkedinIn className="secondary-color h-4 w-4" />
          </a>
          <a href="https://github.com/jeffahn1">
            <FaGithubSquare className="secondary-color h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <CenteredDiv />
        <div className="text-center space-y-3 py-2">
          <h2 className="font-bold text-xl text-gray-300">
            Hello! Welcome to my online Profile.
          </h2>
          <p className="text-gray-300">
            I am a New York based SEO Consultant and Financial Analyst with a
            passion for Web Development projects with my Business Partner{" "}
            <a
              href="https://www.linkedin.com/in/tonia-roganti"
              className="underline"
            >
              Tonia
            </a>
            .
          </p>
        </div>
        <div className="py-12 space-y-2">
          <h2 className="text-2xl text-center font-bold text-gray-400">
            Contact Me
          </h2>
          <div className="flex space-x-10 items-center">
            <a href="mailto:jeff.j.ahn@protonmail.com">
              <AiOutlineMail className="secondary-color h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/jeff-j-ahn/" target="_blank">
              <FaLinkedinIn className="secondary-color h-6 w-6" />
            </a>
            <a href="https://github.com/jeffahn1">
              <FaGithubSquare className="secondary-color h-6 w-6" />
            </a>
          </div>
          {/* contact message box for now email */}
        </div>
      </div>
      {/* intro wrapped on mobile */}
      <div>
        {/* image */}
        {/* aboutme */}
      </div>
    </div>
  );
}

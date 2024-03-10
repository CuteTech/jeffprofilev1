"use client";
import Image from "next/image";
import CenteredDiv from "./components/CenteredDiv";
import { FaGithubSquare, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <div className="w-full px-10">
      <div className="flex justify-between w-full py-2 relative items-center mb-20">
        <div>
          <Image
            src="/logo.png"
            alt="Next.js Logo"
            width={40}
            height={27}
            priority
          />
        </div>
        
        <div>
          <button className="flex-inline bg-white items-center justify-end rounded-md p-1 text-[#1D9DBD] hover:bg-gray-100 hover:text-[#E78FB3] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1D9DBD]" id="headlessui-popover-button-5" type="button" aria-expanded="false"><span className="sr-only">Open menu</span><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge mt-0 text-white css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DehazeIcon"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"></path></svg></button>
        </div>
        {/* <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/jeff-j-ahn/" target="_blank">
            <FaLinkedinIn className="secondary-color h-4 w-4" />
          </a>
          <a href="https://github.com/jeffahn1">
            <FaGithubSquare className="secondary-color h-4 w-4" />
          </a>
        </div> */}
      </div>

      <div className="flex flex-col justify-center items-center  relative mt-10">
        <CenteredDiv />
        <div className="text-center space-y-3 py-2">
          <h2 className="font-bold text-xl text-gray-300 text-center">
            {" "}
            Hello! ✌️ Welcome to my digital profile! 
          </h2>

          <p className="text-gray-300">
            SEO | Business Development | FinTech | Web Development
            {/* with my Business Partner{" "}
            <a
              href="https://www.linkedin.com/in/tonia-roganti"
              className="underline"
            >
              Tonia
            </a> */}
          </p>
          <div className="flex space-x-4 items-center justify-center pb-10">
            <a href="mailto:jeff.j.ahn@protonmail.com">
              <AiOutlineMail className="secondary-color h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/jeff-j-ahn/" target="_blank">
              <FaLinkedinIn className="secondary-color h-6 w-6" />
            </a>
            <a href="/jeffahn-resume.pdf">
              <FaRegFilePdf className="secondary-color h-6 w-6" />
            </a>
            <a href="https://github.com/jeffahn1">
              <FaGithubSquare className="secondary-color h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="py-12 space-y-2">
          {/* <Typography variant="h2" color="gray" className="mb-2 text-center">
            Online Profiles
          </Typography> */}
          {/* <div className="flex space-x-4 items-center justify-center pb-10">
            <a href="mailto:jeff.j.ahn@protonmail.com">
              <AiOutlineMail className="secondary-color h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/jeff-j-ahn/" target="_blank">
              <FaLinkedinIn className="secondary-color h-6 w-6" />
            </a>
            <a href="/jeffahn-resume.pdf">
              <FaRegFilePdf className="secondary-color h-6 w-6" />
            </a>
            <a href="https://github.com/jeffahn1">
              <FaGithubSquare className="secondary-color h-6 w-6" />
            </a>
          </div> */}
          {/* <div className="py-12 space-y-2">
            <Typography variant="h2" color="gray" className="mb-2 text-center">
              Resume & Github
            </Typography>
            <p className="text-center flex items-center justify-center space-x-4">
              <a href="/jeffahn-resume.pdf">
                <FaRegFilePdf className="secondary-color h-6 w-6" />
              </a>
              <a href="https://github.com/jeffahn1">
                <FaGithubSquare className="secondary-color h-6 w-6" />
              </a>
            </p>
          </div> */}

          {/* projects */}
          <Projects />
          <Certificates />
        </div>
      </div>
    </div>
  );
}

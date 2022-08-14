import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Tech() {
  return (
    <div
      name="tech"
      className="flex flex-col justify-center items-center font-mono w-full py-24 "
    >
      <h1 className="text-4xl text-[#fff] text-center font-bold p-8 font-poppins">
        I am working with:
      </h1>
      <div className="lg:flex mb-4 justify-between w-[60%] lg:w-[60%]">
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8 rounded-xl shadow-[#a34102] bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <AiFillHtml5 size={100} className="fill-[#a34100]"></AiFillHtml5>
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              HTML5
            </h1>
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8 rounded-xl shadow-[#26abfe] bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500">
            <DiCss3 size={100} className="fill-[#26abff]" />
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              CSS3
            </h1>
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8 rounded-xl shadow-[#ff1] bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <IoLogoJavascript size={100} className="fill-[#ff0]" />
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              JavaScript
            </h1>
          </div>
        </a>
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          <div className="shadow-lg p-8 rounded-xl shadow-[#09abfe] bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <FaReact size={100} className="fill-[#09abff]" />
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              React
            </h1>
          </div>
        </a>
      </div>
      <div className="lg:flex mb-4 justify-between w-[60%] lg:w-[60%]">
        <a
          href="https://www.mongodb.com/docs/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8  shadow-[#378805] rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiMongodb size={100} className="fill-[#378802]" />
            <h1 className="text-xl text-[#ffff] text-center p- font-semibold font-mono">
              MongoDb
            </h1>
          </div>
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#ffea] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <BsGithub size={100} />
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
              GitHub
            </h1>
          </div>
        </a>
        <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#37a838] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500">
            <IoLogoNodejs size={100} className="fill-[#378802]" />
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              Node.js
            </h1>
          </div>
        </a>

        <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#09adff] p-8 rounded-xl bg-[#0a192b] first-letter:mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiTailwindcss size={100} className="fill-[#09abff]" />
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
              TailwindCss
            </h1>
          </div>
        </a>
      </div>

      <div className="lg:flex mb-4 justify-between w-[60%] lg:w-[60%]">
        <a
          href="https://expressjs.com/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="shadow-lg p-8  shadow-[#ffde] rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiExpress size={100} className="fill-[#ffde]" />
            <h1 className="text-xl text-[#ffff] text-center p- font-semibold font-mono">
              Express.js
            </h1>
          </div>
        </a>
        <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#45fe] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[rewiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <SiTypescript size={100} className="fill-[#25ff]"/>
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
             TypeScript
            </h1>
          </div>
        </a>
        <a href="https://sass-lang.com/documentation/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#c317b7] p-8 rounded-xl bg-[#0a192b] mb-4 animate-[wiggle_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500">
            <FaSass size={100} className="fill-[#c317b7]" />
            <h1 className="text-xl text-[#ffff] text-center font-semibold font-mono">
              Sass
            </h1>
          </div>
        </a>

        <a href="https://getbootstrap.com/" rel="noreferrer" target="_blank">
          <div className="shadow-lg shadow-[#a027f0] p-8 rounded-xl bg-[#0a192b] first-letter:mb-4 animate-[wiggle_3s_ease-in-out_infinite]  hover:scale-110 transition-all duration-500">
            <FaBootstrap size={100} className="fill-[#a020f0]" />
            <h1 className="text-xl text-[#ffff]  text-center font-semibold font-mono">
              BootStrap
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Tech;

import React from "react";
import myCv from "../images/cv.png"

function Resume() {
  return <div name="resume" className="mx-auto justify-center items-center p-2 md:p-20 flex flex-col lg:flex-row bg-[#4446] md:w-[80%] w-[98%] rounded-2xl">
    <div className="sm:w-[60%] h-[100%] py-4  w-[90%]">
    <img src={myCv}  className="w-full h-full "alt="cv" />
    </div>
    <div className="flex justify-center items-center p-2 my-4  lg:p-36 w-[60%] font-barlow text-[#fffe] font-semibold text-xl md:text-3xl">
      <p className="" >I have skills about creating responsive and functional Web-sites. I am always working on myself to improve my abilities.
      I am always eager to develop myself and learn new technologies about Web programming.
      </p>
      </div>
  </div>;
}

export default Resume;

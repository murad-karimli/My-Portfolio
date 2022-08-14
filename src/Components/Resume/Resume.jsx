import React from "react";
import myCv from "../images/cv.png"

function Resume() {
  return <div name="resume" className="mx-auto p-20 flex flex-col lg:flex-row bg-[#4446] w-[80%] rounded-2xl">
    <img src={myCv}  className="w-[450px] h-[600px] "alt="cv" />
    <div className="flex justify-center items-center p-36 w-[60%] font-barlow text-[#fffe] font-semibold text-3xl">
      <p>I have skills about creating responsive and functional Web-sites. I am always working on myself to improve my abilities.
      I am always eager to develop myself and learn new technologies about Web programming.
      </p>
      </div>
  </div>;
}

export default Resume;

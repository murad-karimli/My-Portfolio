import React from "react";
import code from "../images/nate-grant-QQ9LainS6tI-unsplash.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  return (
    <div
      name="about"
      className="flex  md:flex-row h-auto flex-col w-[80%] opacity-60 p-8 mx-auto my-32 rounded-2xl bg-[#4348]  lg:h-[500px] bg-center bg-cover"
    >
      <div className="w-[50%] flex relative  items-center">
        <span className="text-3xl mx-4 mb-4 p-2 text-[#fff] font-poppins">
          Hi! My name is Murad.
        </span>
        <span className="text-2xl mx-4 p-2 text-[#fff] font-barlow">
          I'm a student at Azerbaijan State Oil and Industy University. I am
          learning web development.And I have knowledge and skills about
          creating responsive and functional web-sites.{" "}
        </span>
      </div>
      <div className=" md:w-[70%] right-0 items-end justify-end flex m-2">
        <LazyLoadImage
          className="rounded-3xl w-full  h-full shadow-sm right-[29%] shadow-[#ffe]"
          effect="blur"
          delayMethod="debounce"
          delayTime={3500}
          alt={code.alt}
          height={code.height}
          src={code} // use normal <img> attributes as props
          width={code.width}
        />
      </div>
    </div>
  );
}

export default About;

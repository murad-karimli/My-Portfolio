// import Typical from 'react-typical'
import Typical from "react-typical";
import myPhoto from "../images/IMG_20220620_154722_402 (2).jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Header() {
  console.log("dsdsd");
  return (
    <>
      <div
        className="lg:flex-row overflow-x-hidden flex-col justify-center items-center  flex font-700 p-2 mx-auto md:mx-2 md:p-8 py-20 "
        name="header"
      >
        <div className="mx-auto  lg:mx-8 relative flex w-[90%] md:w-[30%] items-center justify-center">
          <LazyLoadImage
            className="rounded-3xl h-96 mb-8 shadow-md opacity-50  shadow-[#ffe]"
            effect="blur"
            delayMethod="debounce"
            delayTime={3500}
            alt={myPhoto.alt}
            height={myPhoto.height}
            src={myPhoto} // use normal <img> attributes as props
            width={myPhoto.width}
          />
        </div>

        <div className="  text-white text-xl flex h-[400px] flex-col p-8 md:p-16 w-[90%]  md:w-[50%] rounded-2xl shadow-[#ffee] my-auto shadow-md md:mx-2 mx-auto bg-[#4242] ">
          <h1 className="mb-[7%] text-white font-semibold text-2xl md:text-3xl animate-[wiggle_3s_ease-in-out_infinite] w-[70%] font-mono inline">
            <span className="text-[#ffd000] font-poppins">
              console.log("
              <p className="text-[#00ff80] inline font-poppins">
                Hi! I'm Murad
              </p>
              ");
            </span>{" "}
          </h1>

          <Typical
            steps={[
              "I'm ",
              1200,
              "I'm BackEnd Developer 🖥️",
              1000,
              "I'm FrontEnd Developer 💻",
              1000,
              "I'm FullStack Developer 🚀",
              1500,
            ]}
            className="text-white font-silk text-3xl"
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

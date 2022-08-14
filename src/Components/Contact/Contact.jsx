import React from "react";

function Contact() {
  return (
    <div name="contact" className="flex w-[90%] my-20 flex-col items-center justify-center mx-auto  h-screen">
      <div>
        <p className="border-b-8 w-36 mb-4 border-[#215e3cee] text-2xl font-semibold text-[#fffe]">
          Contact me
        </p>
        <p className="text-[#bbc2beee] mb-4 text-xl font-semibold">
          //Submit the form below or shoot me an email- murad.ker.36@gmail.com
        </p>
      </div>
      <form
      className="w-full md:w-[60%]"
        action="https://getform.io/f/1e01b791-7cbc-4f7e-83e4-2fadb094398a"
        method="POST"
      >
        <div className="flex flex-col w-full">
          <input
            className="m-4 p-2 bg-[#1d2132] text-[#fff]"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="m-4 p-2 bg-[#1d2132] text-[#fff]"
            type="text"
            placeholder="E-mail"
            email="email"
          />
          <textarea
            className="m-4 p-2 bg-[#1d2132] text-[#fff]"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="hover:bg-main w-40 md:p-4 rounded-xl hover:transition-all duration-500 hover:scale-95 mx-auto text-[#fffe] font-semibold text-xl bg-[#0b4b3b]">
            Let's Collaborate
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

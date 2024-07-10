import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-wrap text-white flex flex-1 w-full h-fit flex-wrap pb-5">
      <div className=" w-full md:w-1/4 md:ms-48 ">
        <h1 className="font-semibold text-lg md:text-2xl mt-5">
          The Learn Bot
        </h1>
        <ul className="mt-2 p-5">
          <li className="p-3">Home </li>
          <li className="p-3">About </li>
          <li className="p-3">Contact</li>
          <li className="p-3">Blogs</li>
          <li className="p-3">Courses</li>
        </ul>
      </div>
      <div className=" w-full md:w-1/4 md:ms-20 md:mt-16">
        <div className="mt-10 ms-10 flex flex-wrap">
          <img
            src="whatsapp.png"
            alt=""
            className="bg-white w-10 h-10 rounded-2xl inline mr-5"
          />
          +91 123-456-7890
        </div>
        <div className="mt-5 ms-10 flex flex-wrap">
          <img
            src="emaillogo.jpg"
            alt=""
            className="bg-white w-10 h-10 rounded-2xl inline mr-5"
          />
          abcd@gmail.com
        </div>
        <div className="mt-5 md:ms-28 ms-10">
          <h1 className="ms-4">or</h1>
          <h1 className="">Reach us</h1>
        </div>
        <div className="mt-2 flex p-5 ms-4">
          <img src="fb.jpg" alt="" className="h-10 w-10 rounded-full mr-4" />
          <img src="insta.png" alt="" className="h-10 w-10 rounded-full mr-4" />
          <img
            src="twitter.webp"
            alt=""
            className="h-10 w-10 rounded-full mr-4"
          />
          <img
            src="linkedin.png"
            alt=""
            className="h-10 w-10 rounded-full mr-4"
          />
        </div>
      </div>
      <div className=" w-full md:w-1/4 md:ms-20 mt-5">
        <div className="mt-10">
          <img
            src="location.png"
            alt=""
            className="bg-white w-10 h-10 inline rounded-full mr-3"
          />
          #123,D- apprament ,chennai,Tamil Nadu
        </div>
        <div className="mt-10">
          <img
            src="clock.jpg"
            alt=""
            className="bg-white w-10 h-10 inline rounded-full mr-4"
          />
          9AM - 6PM
        </div>
        <div className="mt-4 py-2">
          <p className="mb-2">Terms & Conditions</p>
          <p className="mb-2">Legal </p>
          <p className="mb-2">Our Services</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

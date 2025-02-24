import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaChevronCircleLeft } from "react-icons/fa";
import wave from "../assets/waveorg.png"

const Contact = () => {
  return (
    <div className="ContactBg relative bg-[#05D973] mix-blend-multiply w-full h-screen py-10 flex flex-col justify-center items-center">
      <a href="/">
        <div className=" absolute top-4 left-4 text-xl bg-[#fff] p-1 rounded-full">
          <FaChevronCircleLeft />
        </div>
      </a>
      <div className="relative">
            <img src={wave} alt="" />
            <img src={wave} alt="" className="opacity-10 absolute top-2 drop-shadow-sm rotate-3"/>
        </div>
      <div className="text-center mb-3 text-3xl drop-shadow-2xl font-bold text-[#fff]">
        Contact Us
      </div>
      <div className="flex flex-col justify-center items-center w-full px-2">
        <form action="" className="w-full flex flex-col gap-2 mb-5">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-8 py-2 rounded-3xl border-[2px] border-[#fff] backdrop-blur-sm outline-none text-[#fff]"
            />
            <span className=" absolute right-4 text-[#fff]">
              <FaUser />
            </span>
          </div>
          <div className="relative flex items-center w-full">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full px-8 py-2 rounded-3xl border-[2px] border-[#fff] backdrop-blur-sm outline-none text-[#fff]"
            />
            <span className=" absolute right-4 text-[#fff]">
              <MdPhone />
            </span>
          </div>
          <div className="relative flex items-center w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-8 py-2 rounded-3xl border-[2px] border-[#fff] backdrop-blur-sm outline-none text-[#fff]"
            />
            <span className="absolute right-4 text-[#fff]">
              <HiOutlineMail />
            </span>
          </div>
          <div className="relative flex items-start w-full">
            <textarea
              name=""
              placeholder="Message"
              id=""
              className="w-full px-8 py-2 rounded-3xl border-[2px] border-[#fff] backdrop-blur-sm outline-none text-[#fff]"
            ></textarea>
            <span className="absolute right-4 text-[#fff] top-2">
              <MdMessage />
            </span>
          </div>
          <div className="flex justify-between w-full rounded-2xl bg-[#fff]">
            <button className="flex items-center textGradient2 justify-center font-bold gap-2 px-10 w-full py-2 rounded-2xl">
              Submit <IoIosSend className="text-[#00af0f]" />
            </button>
          </div>
        </form>
        {/* Social Media */}
        <div className="flex justify-center items-center gap-4 border-t w-full pt-3 border-[#fff]">
          <div className="text-2xl text-[#fff]">
            <BiLogoFacebookCircle />
          </div>
          <div className="text-2xl text-[#fff]">
            <RiInstagramFill />
          </div>
          <div className="text-2xl text-[#fff]">
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>
        <div className="relative">
            <img src={wave} alt="" />
            <img src={wave} alt="" className="opacity-10 absolute top-2 drop-shadow-sm rotate-3"/>
        </div>
    </div>
  );
};

export default Contact;

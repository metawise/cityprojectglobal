"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FifthSection = ({ data, Video_gif }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto max-w-[1481px]">
      <div
        className="flex flex-col md:flex-row w-[100%] pb-[10px] mx-auto items-center rounded-[5px]"
        style={{ backgroundColor: "rgb(3, 4, 2)" }}
      >
        <div className="md:w-5/12 w-full p-[40px] md:p-[40px] mt-10 md:mt-0">
          <span className="text-[18px] bg-[#fff] text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-[20px] px-4 py-1 font-bold">
            {data.page.homefifthsection.fifthfirstsubtitle}
          </span>
          <h5 className="md:text-[45px] text-[26px] text-[#A1CF5F] md:text-left text-left pb-[15px] font-bold pt-[20px] md:leading-10">
            {data.page.homefifthsection.mainheadingfifth}
          </h5>
          <p className="md:text-[45px] md:w-[87%] text-[22px] md:text-left text-left text-white md:leading-normal font-bold">
            {data.page.homefifthsection.fifthheadingsimple}
          </p>
          <Image
            src={data.page.homefifthsection.authorimage?.node?.link}
            className="md:h-[150px] mx-unset mt-10 md:mt-0 md:mx-0 h-[83px]"
            alt="image"
            width={800}
            height={500}
          />
          <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-5">
            {data.page.homefifthsection.authortitle}
          </h5>
          <h5 className="text-[12px] text-white md:text-left text-left font-bold">
            {data.page.homefifthsection.authordesignation}
          </h5>
        </div>
        <div className="md:w-8/12 md:py-[30px] relative">
          <Image
            src={data.page.homefifthsection.fifthfirstimage?.node?.link}
            className=""
            layout="responsive"
            width={16}
            height={9}
            alt=""
          />
          <Image
            src={Video_gif}
            className="w-[224px] video-gif cursor-pointer"
            alt="Video gif"
            width={100}
            height={100}
            onClick={handleVideoClick}
          />
          <div className="md:float-right md:mt-[-50px] md:mr-3 mt-5 z-999 relative">
            <Link href={data.page.homefifthsection.buttonlinkone}>
              <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                {data.page.homefifthsection.fifthbuttonone}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  id="arrow"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
                </svg>
              </button>
            </Link>
            <Link href={data.page.homefifthsection.buttonlinksecond}>
              <button className="mx-auto mt-[21px] md:mx-0 md:mt-4 flex items-center gap-3 text-black bg-white font-bold p-2 rounded-[5px]">
                {data.page.homefifthsection.textbuttonsecond}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  id="arrow"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg w-[90%] md:w-[70%]">
            <button
              className="absolute top-2  z-99999 right-2 text-black font-bold"
              onClick={handleCloseModal}
            >
              X
            </button>
            <video
              className="w-full rounded-lg"
              controls
              autoPlay
              src='videos.mp4'
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default FifthSection;
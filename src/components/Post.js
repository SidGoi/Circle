import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="w-80 flex flex-col gap-3 bg-pink-50 py-3 pt-4 rounded-2xl">
      <div className="flex items-center justify-between px-6">
        <div className="flex gap-2 items-center">
          <Image
            src={"/temp.jpg"}
            height={200}
            width={200}
            className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-[#222]">
              Siddharaj Gohil
            </h1>
            <h1 className="text-md font-semibold text-[#222]">
              @siddharajgohil
            </h1>
          </div>
        </div>
        <div className="cursor-pointer flex items-center justify-center gap-1">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#222"
          >
            <path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Zm-38-543q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z" />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#CD2C58"
          >
            <path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z" />
          </svg> 5
        </div>
      </div>
      <Image
        src={"/temp.jpg"}
        height={1000}
        width={1000}
        className="w-80 h-80 bg-primary rounded-2xl object-cover"
      />
      <p className="px-4 font-medium">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Post;

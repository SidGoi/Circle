import Image from "next/image";
import React from "react";

const PostCard = ({
  userName,
  userImage,
  postImage,
  time,
  date,
  description,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl cursor-pointer overflow-hidden">
      {/* Post Image */}
      <div className="relative w-full h-64">
        <Image
          src={postImage}
          alt="Post Image"
          fill
          className="object-cover rounded-b-none"
        />
      </div>

      {/* User Info + Post Details */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={userImage}
              alt={userName}
              width={500}
              height={500}
              className="rounded-full h-8 w-auto"
            />
            <p className="font-semibold text-gray-900">{userName}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {time} | {date}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;

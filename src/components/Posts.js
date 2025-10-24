import React from "react";
import PostCard from "./ui/PostCrad";

const Posts = () => {
  return (
    <div className="px-8 pb-8 flex gap-5 flex-wrap">
      <PostCard
        userName="Siddharaj Gohil"
        userImage="/sid-profile.jpg"
        postImage="/friends-trip.jpg"
        time="12:30PM"
        date="24 October 2025"
        description="Discover, host, and relive unforgettable experiences all in one place. Circle connects people through events that matter, from cozy get-togethers to grand celebrations."
      />
      <PostCard
        userName="Siddharaj Gohil"
        userImage="/sid-profile.jpg"
        postImage="/friends-trip.jpg"
        time="12:30PM"
        date="24 October 2025"
        description="Discover, host, and relive unforgettable experiences all in one place. Circle connects people through events that matter, from cozy get-togethers to grand celebrations."
      />
      <PostCard
        userName="Siddharaj Gohil"
        userImage="/sid-profile.jpg"
        postImage="/friends-trip.jpg"
        time="12:30PM"
        date="24 October 2025"
        description="Discover, host, and relive unforgettable experiences all in one place. Circle connects people through events that matter, from cozy get-togethers to grand celebrations."
      />
      <PostCard
        userName="Siddharaj Gohil"
        userImage="/sid-profile.jpg"
        postImage="/friends-trip.jpg"
        time="12:30PM"
        date="24 October 2025"
        description="Discover, host, and relive unforgettable experiences all in one place. Circle connects people through events that matter, from cozy get-togethers to grand celebrations."
      />
    </div>
  );
};

export default Posts;

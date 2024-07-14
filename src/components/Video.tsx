import React from "react";

function Video() {
  return (
    <video
      className="background-canvas w-full h-full object-cover"
      autoPlay
      muted
    >
      {" "}
      <source src="/ui/bac3.mp4" type="video/mp4" /> Your browser does not
      support the video tag.{" "}
    </video>
  );
}

export default Video;

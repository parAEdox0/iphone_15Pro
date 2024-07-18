import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("assets/small_vid.mp4");

  useEffect(() => {
    const updateVideoSrc = () => {
      if (window.innerWidth >= 768) {
        setVideoSrc("assets/large_vid.mp4");
      } else {
        setVideoSrc("assets/small_vid.mp4");
      }
    };

    updateVideoSrc(); // Trigger initial resize event to set video source based on window width

    window.addEventListener("resize", updateVideoSrc);
    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to("#pro", {
      opacity: 100,
      delay: 1.3,
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center gap-5 md:pb-30"
      style={{ height: "calc(100vh - 44px)" }}
    >
      <img
        src="assets/pro.png"
        className="w-[130px] md:w-[190px] opacity-0"
        id="pro"
      />
      <video
        id="heroVidSmall"
        src={videoSrc}
        muted
        autoPlay
        className=""
      ></video>
    </section>
  );
};

export default Hero;

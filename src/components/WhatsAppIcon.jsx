import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/animation/whatsapp.json";

export const WhatsAppIcon = ({ size }) => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false, // Play only once
      autoplay: true,
      animationData: animationData,
    });

    // Listen for animation complete event to stop the animation and show the end state
    anim.addEventListener("complete", () => {
      anim.goToAndStop(anim.totalFrames - 1, true); // Go to the last frame and stop
    });

    // Adjust the size of the container element
    if (size) {
      container.current.style.width = "4.5vh";
      container.current.style.height = "4.5vh";
    } else {
      container.current.style.width = "20vh";
      container.current.style.height = "20vh";
    }

    // Adjust the animation speed (period)
    if (size) {
      anim.setSpeed(4); // Set the speed to 0.5 (50% of the original speed)
    }
    else {
      anim.setSpeed(1.2); // Set the speed to 0.5 (50% of the original speed)
    }
    return () => {
      // Cleanup animation when component unmounts
      anim.destroy();
    };
  }, []);

  return <div ref={container} />;
};

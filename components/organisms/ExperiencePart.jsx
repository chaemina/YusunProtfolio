import Title from "../atom/Ttitle";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";
import LoginCard from "../molecules/LoginCard";

const ExperiencePart = () => {
  const ref = useRef(null);

  useIntersectionObserver(ref, {
    onEnter: () => ref.current.classList.add("animate-fade-up"),
  });

  return (
    <>
      <div ref={ref} className="w-full flex flex-col space-y-8 opacity-0">
        <Title className="bold ">Simple Experience</Title>
        <LoginCard />
      </div>
    </>
  );
};

export default ExperiencePart;

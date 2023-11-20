import Title from "../atom/Ttitle";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";
import SkillsCard from "../molecules/SkillsCard";
import ProfileImage from "../../public/asset/image/yusunprofile.png";
import Image from "next/image";

const ThirdPart = () => {
  const ref = useRef(null);

  useIntersectionObserver(ref, {
    onEnter: () => ref.current.classList.add("animate-fade-up"),
  });

  return (
    <>
      <div ref={ref} id="intro" className="w-full space-y-10 opacity-0">
        <Title className="bold">Intro</Title>
        <div className="flex">
          <p className="w-[40%]">
            Tenho 20 anos, estou em transição de carreira, vindo da área
            administrativa onde desenvolvi experiência com gestão de pessoas,
            gestão de empresas e negociação com cliente. Hoje construo
            aplicações fullstack!
          </p>
          <Image
            src={ProfileImage}
            alt="profile Image"
            className="max-w-[50%] max-h-[50%]"
          ></Image>
        </div>
        <Title className="text-3xl">Skills</Title>

        <SkillsCard />
      </div>
    </>
  );
};

export default ThirdPart;

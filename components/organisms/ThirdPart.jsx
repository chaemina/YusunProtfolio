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
          <p className="text-lg w-[45%]">
            저는 전남대학교 소프트웨어 공학과를 재학 중인 25살 백앤드 개발자
            입니다. 카카오 주관 카카오 테크 캠퍼스의 최종 발표에서 "축팅" 이라는
            서비스를 개발하여 우수상을 수상하였습니다. 해당 서비스에서 저는
            스프링부트와 스프링시큐리티를 활용해서 보안, 상태관리 분야를
            중점으로 개발했습니다. 상단의 Projects 파트 "축팅"의 깃허브에서 저의
            코드를 확인 하실 수 있습니다.
          </p>
          <Image
            src={ProfileImage}
            alt="profile Image"
            className="max-w-[50%] h-[20rem]"
          ></Image>
        </div>
        <Title className="text-3xl">Skills</Title>

        <SkillsCard />
      </div>
    </>
  );
};

export default ThirdPart;

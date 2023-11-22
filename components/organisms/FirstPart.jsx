import Link from "next/link";
import Card from "../atom/Card";
import Title from "../atom/Ttitle";

const FirstPart = () => {
  return (
    <>
      <a href="/">
        <Title className="text-base text-sky-900">
          <span className="material-symbols-outlined relative -bottom-1">
            hr_resting
          </span>
          kimyuseon
        </Title>
      </a>
      <div className="w-full">
        <Card className="bg-gradient-to-r from-sky-300 h-[350px] flex flex-col justify-center items-center">
          <p className="leading-relaxed">Hola, soy Yuseon!🤙</p>
          <Title className="text-black w-[85%] leading-relaxed">
            소프트웨어를 통해 더 나은 세상을 고민하는 백앤드 개발자입니다{" "}
            <span className="material-symbols-outlined">computer</span>
          </Title>
          <a
            href="#intro"
            className="hover:text-sky-400 transition-4s leading-relaxed"
          >
            see my Intro
            <span className="material-symbols-outlined relative left-2 -bottom-2">
              arrow_right_alt
            </span>
          </a>
        </Card>
      </div>
    </>
  );
};

export default FirstPart;

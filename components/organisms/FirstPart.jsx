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
          <p>Olá, eu sou o Alê 🤙</p>
          <Title className="text-black text-2xl w-[80%]">
            Desenvolvo ideias e ajudo a construir um mundo melhor através do
            software.
          </Title>
          <a href="#intro" className="hover:text-sky-400 trasition-4s">
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

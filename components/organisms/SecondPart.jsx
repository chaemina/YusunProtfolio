import Title from "../atom/Ttitle";
import ImageCard from "../molecules/ImageCard";
import yusun from "../../public/asset/image/yusun.png";
import BeCareFul from "../../public/asset/image/BeCareFul.png";
import NextJs from "../../public/asset/image/NextJs.png";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";

const SecondPart = () => {
  const ref = useRef(null);

  useIntersectionObserver(ref, {
    onEnter: () => ref.current.classList.add("animate-fade-up"),
  });

  const projects = [
    {
      title: "축팅",
      tags: [
        { name: "JAVA", color: "orange" },
        { name: "SpringBoot", color: "red" },
        { name: "Spring Security", color: "yellow" },
        { name: "My SQL", color: "yellow" },
      ],
      image: yusun,
      githubLink: "https://github.com/yuseonkim/Team14_BE",
      deployLink: "https://k2bf481c846ffa.user-app.krampoline.com/",
    },
    {
      title: "BeCareFul",
      tags: [
        { name: "JAVA", color: "orange" },
        { name: "SpringBoot", color: "red" },
        { name: "Spring Security", color: "blue" },
      ],
      image: BeCareFul,
      githubLink: "https://github.com/yuseonkim/BeCareful_BE",
      deployLink: "/video",
    },
  ];

  return (
    <>
      <div ref={ref} className="w-full opacity-0">
        <Title className="bold text-black">Projects</Title>
        <section className="mt-10">
          <aside className="w-full flex flex-wrap w-1/3 space-x-2">
            {projects.map((project) => (
              <ImageCard
                key={project.title}
                title={project.title}
                tags={project.tags}
                image={project.image}
                githubLink={project.githubLink}
                deployLink={project.deployLink}
              />
            ))}
          </aside>
        </section>
      </div>
    </>
  );
};

export default SecondPart;

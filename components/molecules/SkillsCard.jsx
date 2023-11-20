import Java from "../../public/asset/image/Java.png";
const SkillsCard = () => {
  const badgesF = [
    "/asset/image/Java.png",
    "asset/image/Spring.png",
    "asset/image/SpringBoot.jpg",
    "asset/image/MySQL.png",
  ];

  const badgesC = [
    "https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white",
    "https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white",
    "https://img.shields.io/badge/ Slack-4A154B?style=flat-square&slack=notion&logoColor=white",
    "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white",
  ];
  return (
    <>
      <main className="flex flex-col justify-center items-center space-y-10">
        <div className="w-full flex flex-wrap">
          {badgesF.map((badge, index) => (
            <img key={index} src={badge} className="w-30 h-20 m-1" />
          ))}
        </div>
        <div className="flex flex-wrap">
          {badgesC.map((badge, index) => (
            <img key={index} src={badge} className="w-25 h-10 m-1" />
          ))}
        </div>
      </main>
    </>
  );
};
export default SkillsCard;

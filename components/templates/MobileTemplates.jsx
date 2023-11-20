import FirstPart from "../organisms/FirstPart";
import SecondPart from "../organisms/SecondPart";
import ThirdPart from "../organisms/ThirdPart";
import ExperiencePart from "../organisms/ExperiencePart";

const MobileTemplates = () => {
  return (
    <>
      <main className="h-[1000px] flex flex-col items-center space-y-20">
        <FirstPart />
        <SecondPart />
        <ExperiencePart />
        <ThirdPart />
      </main>
    </>
  );
};

export default MobileTemplates;

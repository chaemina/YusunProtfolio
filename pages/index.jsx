import React, { useState, useEffect } from "react";
import WebTemplates from "../components/templates/WebTemplates";
import MobileTemplates from "../components/templates/MobileTemplates";

const Index = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1230);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main className="flex h-screen ">
        {!isMobileView && (
          <section className="w-3/5 flex justify-center">
            <WebTemplates />
          </section>
        )}
        <aside className={`p-6 ${isMobileView ? "w-screen" : "w-2/5"}`}>
          <MobileTemplates />
        </aside>
      </main>
    </>
  );
};

export default Index;

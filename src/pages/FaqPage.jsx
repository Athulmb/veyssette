import React from "react";
import FaqHero from "../components/faq/FaqHero";
import FaqAccordion from "../components/faq/FaqAccordion";
import PageTransition from "../components/comen/PageTransition";

const FaqPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907]">
        <FaqHero />
        <FaqAccordion />
      </main>
    </PageTransition>
  );
};

export default FaqPage;

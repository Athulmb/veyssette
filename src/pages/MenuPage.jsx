import React from "react";
import MenuHero from "../components/menu/MenuHero";
import MenuGrid from "../components/menu/MenuGrid";
import PageTransition from "../components/comen/PageTransition";

const MenuPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907]">
        <MenuHero />
        <MenuGrid />
      </main>
    </PageTransition>
  );
};

export default MenuPage;

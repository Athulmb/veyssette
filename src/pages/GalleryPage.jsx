import React from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryGrid from "../components/gallery/GalleryGrid";
import PageTransition from "../components/comen/PageTransition";

const GalleryPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907]">
        <GalleryHero />
        <GalleryGrid />
      </main>
    </PageTransition>
  );
};

export default GalleryPage;

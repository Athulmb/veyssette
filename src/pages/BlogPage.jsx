import React from "react";
import BlogHero from "../components/blog/BlogHero";
import BlogList from "../components/blog/BlogList";
import PageTransition from "../components/comen/PageTransition";

const BlogPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907]">
        <BlogHero />
        <BlogList />
      </main>
    </PageTransition>
  );
};

export default BlogPage;

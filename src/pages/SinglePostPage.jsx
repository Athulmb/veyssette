import React from "react";
import SinglePostArticle from "../components/blog/SinglePostArticle";
import PageTransition from "../components/comen/PageTransition";

const SinglePostPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907]">
        <SinglePostArticle />
      </main>
    </PageTransition>
  );
};

export default SinglePostPage;

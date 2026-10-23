import React from "react";
import BookHero from "../components/book/BookHero";
import BookForm from "../components/book/BookForm";
import PageTransition from "../components/comen/PageTransition";

const BookPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907]">
        <BookHero />
        <BookForm />
      </main>
    </PageTransition>
  );
};

export default BookPage;

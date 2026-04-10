import React from "react";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import { ArrowLeft, BookOpen, Bookmark } from "lucide-react";
import Badge from "../../components/ui/badge";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const expectedBook = books.find((book) => book.bookId == bookId);

  if (!expectedBook) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Book not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-green-400 transition-colors mb-8"
        >
          <ArrowLeft size={15} />
          Back to All Books
        </Link>

        {/* Main Card: Cover + Details side by side */}
        <div className="flex flex-col md:flex-row gap-10 bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10">

          {/* ── Left: Book Cover ── */}
          <div className="flex items-center justify-center mx-auto md:mx-auto bg-[#0a0a0a]/50 rounded-xl">
            <img
              src={expectedBook.image}
              alt={expectedBook.bookName}
              className="w-54 md:w-90 md:h-70 rounded-xl object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            />
          </div>

          {/* ── Right: Book Info ── */}
          <div className="flex-1 flex flex-col gap-0">

            {/* Title */}
            <h1 className="text-3xl font-bold text-white leading-snug mb-1">
              {expectedBook.bookName}
            </h1>

            {/* Author */}
            <p className="text-gray-400 text-sm mb-1">
              By : <span className="text-gray-200">{expectedBook.author}</span>
            </p>

            {/* Category */}
            <p className="text-gray-300 text-sm font-medium mb-4">
              {expectedBook.category}
            </p>

            <hr className="border-white/10 mb-4" />

            {/* Review */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              <span className="text-white font-semibold">Review : </span>
              {expectedBook.review}
            </p>

            <hr className="border-white/10 mb-4" />

            {/* Tags */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <span className="text-gray-300 text-sm font-semibold">Tags: </span>
              {expectedBook.tags.map((tag, i) => (
                <Badge key={i}>#{tag}</Badge>
              ))}
            </div>

            <hr className="border-white/10 mb-4" />

            {/* Meta Info rows */}
            <div className="flex flex-col gap-2 text-sm mb-6">
              {[
                { label: "Number of Pages", value: expectedBook.totalPages },
                { label: "Publisher",        value: expectedBook.publisher },
                { label: "Year of Publishing", value: expectedBook.yearOfPublishing },
                { label: "Rating",           value: expectedBook.rating },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-gray-400 w-40 flex">{label}:</span>
                  <span className="text-white font-bold">{value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:border-green-400 text-white text-sm font-semibold rounded-lg transition-colors duration-200">
                <BookOpen size={15} />
                Read
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200">
                <Bookmark size={15} />
                Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookListCard from "../ui/BookListCard";
import { Book } from "lucide-react";

const StoredReadList = ({ sortBy }) => {
  const { storedBooks } = useContext(BookContext);
  const [filterReadList, setFilterReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "rating") {
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        setFilterReadList(sortedData);
      }
      if (sortBy === "pages") {
        const sortedData = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilterReadList(sortedData);
      }
    }
  }, [sortBy, storedBooks]);

  return (
    <div className="py-4">
      {filterReadList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 bg-white/[0.02] border border-white/5 rounded-3xl text-center backdrop-blur-sm">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
            <Book size={40} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            No books read yet
          </h3>
          <p className="text-gray-300 max-w-sm mx-auto mb-8">
            Start your reading journey by exploring our collection and marking
            books as read.
          </p>
          <a
            href="/"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all"
          >
            Browse Books
          </a>
        </div>
      ) : (
        filterReadList.map((book, index) => (
          <BookListCard key={index} book={book} />
        ))
      )}
    </div>
  );
};

export default StoredReadList;

import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookListCard from "../ui/BookListCard";
import { Bookmark } from "lucide-react";

const StoredWishList = ({ sortBy }) => {
  const { wishlistBooks } = useContext(BookContext);
  const [filterWishlist, setFilterWishlist] = useState(wishlistBooks);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "rating") {
        const sortedData = [...wishlistBooks].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilterWishlist(sortedData);
        console.log(sortedData, "sortedData");
      }
      if (sortBy === "pages") {
        const sortedData = [...wishlistBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilterWishlist(sortedData);
      }
    }
  }, [sortBy, wishlistBooks]);

  return (
    <div className="py-4">
      {filterWishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 bg-white/[0.02] border border-white/5 rounded-3xl text-center backdrop-blur-sm">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
            <Bookmark size={40} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-300 max-w-sm mx-auto mb-8">
            Save books you want to read later and they'll show up here for quick
            access.
          </p>
          <a
            href="/"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all"
          >
            Explore Collection
          </a>
        </div>
      ) : (
        filterWishlist.map((book, index) => (
          <BookListCard key={index} book={book} />
        ))
      )}
    </div>
  );
};

export default StoredWishList;

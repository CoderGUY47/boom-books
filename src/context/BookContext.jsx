import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"; /*IMPORTANT*/
import { getAllReadlistFromLocalDB, getAllWishlistFromLocalDB, saveReadlistToLocalDB, saveWishlistToLocalDB} 
from "../utils/localDB";


export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(() =>
    getAllReadlistFromLocalDB(),
  );
  const [wishlistBooks, setWishlistBooks] = useState(() =>
    getAllWishlistFromLocalDB(),
  );



  //for mark as read books
  const handleMarkasRead = (currentBook) => {
    saveReadlistToLocalDB(currentBook);
    const isExisted = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExisted) {
      toast.error("You have already read this book!");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to Read list!`);
    }
    console.log(currentBook, storedBooks, "book");
  };



  //for wishlist books
  const handleWishlist = (currentBook) => {
    const isRead = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isRead) {
      toast.error(`${currentBook.bookName} already added to Wishlist!`);
      return;
    }
    const isExistedInWishlist = wishlistBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistedInWishlist) {
      toast.error(`${currentBook.bookName} already exists in your Wishlist!`);
    } else {
      saveWishlistToLocalDB(currentBook);
      setWishlistBooks([...wishlistBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to Wishlist!`);
    }
  };


  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkasRead,
    wishlistBooks,
    setWishlistBooks,
    handleWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;

//globally share korte context api use korchi. jehetu database ny, local storage use korchi na.

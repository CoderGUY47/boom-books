import React, { createContext, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"; /*IMPORTANT*/

export const BookContext = createContext()

const BookProvider = ({children}) => {

   //for mark as read books
   //step 1: store book id 
   //step 2: where to store
   //step 3: array or collection
   //step 4: if the book is already stored then show a toast message
   //step 5: if the book is not stored then store it and show a toast message 
  const [storedBooks, setStoredBooks] = useState([]);
  const handleMarkasRead = (currentBook) => { 
   const isExisted = storedBooks.find((book) => book.bookId === currentBook.bookId);
   if (isExisted) {
     toast.error("You have already read this book!");
   } else {
     setStoredBooks([...storedBooks, currentBook]);
     toast.success(`${currentBook.bookName} added to Read list!`);
   }
   console.log(currentBook, storedBooks, "book");
  };


  //for wishlist books
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const handleWishlist = (currentBook) => {
    const isRead = storedBooks.find((book) => book.bookId === currentBook.bookId);
    if (isRead) {
      toast.error(`${currentBook.bookName} already added to Wishlist!`);
      return;
    }
    const isExistedInWishlist = wishlistBooks.find((book) => book.bookId === currentBook.bookId);
    if (isExistedInWishlist) {
      toast.error(`${currentBook.bookName} already exists in your Wishlist!`);
    } else {
      setWishlistBooks([...wishlistBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to Wishlist!`);
    }
  };


  const data ={
        storedBooks, setStoredBooks,
        handleMarkasRead,
        wishlistBooks, setWishlistBooks,
        handleWishlist,
    }

  return (
    <BookContext.Provider value={data}>
        {children} 
    </BookContext.Provider>
  )
}

export default BookProvider
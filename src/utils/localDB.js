const getAllReadlistFromLocalDB = () => {
  const allReadlist = localStorage.getItem("readlist");
  if (allReadlist) {
    return JSON.parse(allReadlist);
  }
  return [];
};
const saveReadlistToLocalDB = (book) => {
  const allBooks = getAllReadlistFromLocalDB();
  const isAlreadyExited = allBooks.find(
    (readBook) => readBook.bookId === book.bookId,
  );
  if (isAlreadyExited) {
    return;
  } else {
    //ei data local db te save kora hobe
    allBooks.push(book);
    localStorage.setItem("readlist", JSON.stringify(allBooks));
  }
};

const getAllWishlistFromLocalDB = () => {
  const allWishlist = localStorage.getItem("wishlist");
  if (allWishlist) {
    return JSON.parse(allWishlist);
  }
  return [];
};

const saveWishlistToLocalDB = (book) => {
  const allBooks = getAllWishlistFromLocalDB();
  const isAlreadyExited = allBooks.find(
    (wishBook) => wishBook.bookId === book.bookId,
  );
  if (isAlreadyExited) {
    return;
  } else {
    //ei data local db te save kora hobe
    allBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allBooks));
  }
};

export {
  getAllReadlistFromLocalDB,
  getAllWishlistFromLocalDB,
  saveReadlistToLocalDB,
  saveWishlistToLocalDB,
};

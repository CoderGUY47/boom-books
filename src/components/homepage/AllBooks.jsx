import React, { use } from 'react'

const bookPromise = fetch('/booksData.json').then(res => res.json())


const AllBooks = () => {
    const books = use(bookPromise);
    console.log(books);
  return (
    <div className='container w-[67%] mx-auto py-14'>
        <div className="bg-amber-500 py-20">
            <h1 className="text-5xl font-bold text-center">All Books</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 px-4 md:px-0'>
            {books.map((book) => {
               return (
                 <div className="card w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group" key={book.bookId}>
                   <figure className="relative bg-gradient-to-b from-white/5 to-transparent pt-10 pb-8 px-6 overflow-hidden">
                     {/* Background Glow Effect */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     
                     <img
                       src={book.image}
                       alt={book.bookName} 
                       className="h-56 object-contain rounded-md drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 z-10"
                     />
                   </figure>
                   <div className="card-body p-8 pt-4">
                     <div className="flex flex-wrap gap-2 mb-3">
                       {book.tags.map((tag, index) => (
                         <span key={index} className="px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-green-400 bg-green-400/10 border border-green-400/20 rounded-full">
                           {tag}
                         </span>
                       ))}
                     </div>
                     <h2 className="card-title text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                       {book.bookName}
                     </h2>
                     <p className="text-gray-400 font-medium text-sm mt-1 mb-6 border-b border-white/5 pb-6">
                       By <span className="text-gray-300">{book.author}</span>
                     </p>
                     <div className="flex items-center justify-between mt-auto">
                       <div className="text-gray-400 text-sm font-semibold tracking-wide">
                         {book.category}
                       </div>
                       <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                          <span className="text-white font-bold text-sm tracking-wide">{book.rating}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fbbf24" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                       </div>
                     </div>
                   </div>
                 </div>
               );
            })}
        </div>
    </div>
  )
}

export default AllBooks
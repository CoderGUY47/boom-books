import React from 'react'
import { Link } from 'react-router'
import Badge from './badge'

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="block">
      <div className="card w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer hover:border-green-400/30 hover:shadow-green-500/10">
        <figure className="relative bg-linear-to-b from-white/5 to-transparent pt-10 pb-8 px-6 overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <img
            src={book.image}
            alt={book.bookName}
            className="h-56 object-contain rounded-md drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 z-10"
          />
        </figure>

        <div className="card-body p-8 pt-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {book.tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>

          {/* Book Name */}
          <h2 className="card-title text-base font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-gray-400 font-medium text-sm mt-1 mb-6 border-b border-white/5 pb-6">
            By <span className="text-gray-300">{book.author}</span>
          </p>

          {/* Footer: Category + Rating */}
          <div className="flex items-center justify-between mt-auto">
            <div className="text-gray-400 text-sm font-semibold tracking-wide">
              {book.category}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <span className="text-white font-bold text-sm tracking-wide">{book.rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fbbf24" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BookCard

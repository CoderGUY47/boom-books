import React, { use } from 'react'
import BookCard from '../ui/BookCard'

const bookPromise = fetch('/booksData.json').then(res => res.json())


const AllBooks = () => {
    const books = use(bookPromise);

  return (
    <div className='container w-[67%] mx-auto py-14'>
        <div className="relative text-center py-14 px-4 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[220px] bg-green-500/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-52 h-52 bg-emerald-400/8 rounded-full blur-[70px] pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-green-400/25 bg-green-400/8 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">Our Collection</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                <span className="bg-linear-to-r from-white via-green-200 to-emerald-400 bg-clip-text text-transparent">
                    All Books
                </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-green-400/60" />
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-green-400 opacity-80">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="currentColor" />
                </svg>
                <div className="h-px w-16 bg-linear-to-l from-transparent to-green-400/60" />
            </div>

            <p className="mt-4 text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                Explore our curated library of timeless reads and modern classics.
            </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 px-4 md:px-0'>
            {books.map((book) => (
                <BookCard key={book.bookId} book={book} />
            ))}
        </div>
    </div>
  )
}

export default AllBooks
import React from 'react';
import { Link } from 'react-router';
import { MapPin, Users, FileText } from 'lucide-react';
import Badge from './badge';

const BookListCard = ({ book }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-3xl mb-6 hover:border-green-400/30 transition-all duration-300">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-44 h-60 rounded-2xl flex items-center justify-center p-0">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white leading-tight">
            {book.bookName}
          </h2>
          <p className="text-gray-400 font-medium">
            By : <span className="text-gray-200">{book.author}</span>
          </p>

          {/* Tags & Meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">Tag</span>
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag, index) => (
                  <Badge key={index}>#{tag}</Badge>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} className="text-gray-500" />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Meta Info Row 2 */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm pt-2">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-500" />
              <span>Publisher: {book.publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-gray-500" />
              <span>Page {book.totalPages}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <hr className="border-white/5 my-5" />
        <div className="flex flex-wrap items-center gap-4">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
            Category: {book.category}
          </span>
          <span className="px-4 py-2 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-full border border-orange-500/20">
            Rating: {book.rating}
          </span>
          <Link
            to={`/bookDetails/${book.bookId}`}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-all duration-300 ml-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookListCard;

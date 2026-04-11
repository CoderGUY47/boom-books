import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StoredReadList from '../../components/listedBooks/StoredReadList';
import StoredWishList from '../../components/listedBooks/StoredWishList';
import { ChevronDown } from 'lucide-react';

const Books = () => {
  const { storedBooks, wishlistBooks } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-10 pb-20">
      <div className="container mx-auto w-full lg:w-[67%] px-4">
        
        {/* Page Header */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-10 text-center backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-white mb-2">Listed Books</h1>
        </div>

        {/* Sort Dropdown (UI Placeholder) */}
        <div className="flex justify-center mb-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-green-600 hover:bg-green-700 border-none text-white px-8 rounded-full flex items-center gap-2">
              Sort By <ChevronDown size={18} />
            </div>
            <ul tabIndex={0} className="dropdown-content z-1 top-12 menu p-2 shadow-2xl bg-[#1a1a1a] border border-white/10 rounded-xl w-52 text-gray-300">
              <li><a className="hover:bg-green-500 hover:text-white rounded-lg">Rating</a></li>
              <li><a className="hover:bg-green-500 hover:text-white rounded-lg">Number of pages</a></li>
              <li><a className="hover:bg-green-500 hover:text-white rounded-lg">Publisher year</a></li>
            </ul>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs selectedTabClassName="!border-b-2 !border-green-500 !text-green-500 !bg-transparent outline-none">
          <TabList className="flex border-b border-white/10 mb-8 overflow-x-auto">
            <Tab className="px-6 py-3 cursor-pointer text-gray-400 font-semibold transition-all duration-300 hover:text-white whitespace-nowrap">
              Read Books
            </Tab>
            <Tab className="px-6 py-3 cursor-pointer text-gray-400 font-semibold transition-all duration-300 hover:text-white whitespace-nowrap">
              Wishlist Books
            </Tab>
          </TabList>

          <TabPanel>
            <StoredReadList />
          </TabPanel>
          <TabPanel>
            <StoredWishList />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
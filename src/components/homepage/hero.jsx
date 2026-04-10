import React from 'react'
import book1Img9 from '/assets/book-9.png'

const hero = () => {
  return (
    <div className="relative pt-10">
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="hero min-h-[70vh] container w-[67%] mx-auto relative z-10 bg-black/20 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-md overflow-hidden p-8 mt-6">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between gap-10">
          
          <div className="relative group w-full lg:w-1/2 flex justify-center items-center perspective-[1000px]">
             <div className="absolute w-64 h-64 bg-gradient-to-tr from-green-500/40 to-emerald-400/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
             
             <img
               src={book1Img9}
               alt="Hero Book"
               className="relative z-10 w-full max-w-sm drop-shadow-[0_30px_30px_rgba(0,0,0,0.8)] filter group-hover:-translate-y-6 group-hover:rotate-12 transition-all duration-700 ease-out"
             />
             
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/60 blur-xl rounded-[100%] shadow-[0_0_50px_rgba(34,197,94,0.4)] group-hover:scale-75 group-hover:opacity-50 transition-all duration-700"></div>
          </div>

          <div className='space-y-7 w-full lg:w-1/2'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Fresh Reads, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 filter drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">Fresh Minds</span> <br />
              with Boom Books
            </h1>
            <p className="text-lg font-normal md:text-xl text-gray-400 max-w-lg leading-relaxed pt-2">
              Discover a universe of stories curated just for you. Explore our premium collection and find your next great adventure.
            </p>
            <div className="pt-6">
              <button className="btn border-none bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 h-auto rounded-full shadow-[0_10px_35px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_45px_rgba(16,185,129,0.5)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300">
                View Books List
              </button>
            </div>
          </div>

        </div>
      </div>   
    </div>
  )
}

export default hero
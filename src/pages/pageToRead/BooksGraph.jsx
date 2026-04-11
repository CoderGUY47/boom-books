import React from "react";
import ReadingGraphs from "../../components/ui/ReadingGraphs";

const BooksGraph = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-10 pb-20">
      <div className="container mx-auto w-full lg:w-[67%] px-4">
        
        {/* Page Header */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-10 text-center backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-white mb-2">Reading Progress</h1>
          <p className="text-gray-400">Visualization of pages read per book in your collection.</p>
        </div>

        {/* Graph Section */}
        <ReadingGraphs />
        
      </div>
    </div>
  );
};

export default BooksGraph;
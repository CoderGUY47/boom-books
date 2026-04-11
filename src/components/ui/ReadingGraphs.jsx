import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { BookContext } from "../../context/BookContext";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

/**
 * Custom shape for the BarChart bars.
 */
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadingGraphs = () => {
  const { storedBooks } = useContext(BookContext);

  // Mapping domain data to chart data
  const data = storedBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  if (storedBooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 bg-white/[0.03] border border-white/10 rounded-3xl text-center">
        <h3 className="text-xl font-bold text-white mb-2">No data available</h3>
        <p className="text-gray-400">Add books to your "Read" list to see your reading progress graph.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            interval={0}
            angle={-25}
            textAnchor="end"
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#9ca3af", fontSize: 12 }} 
          />
          <Tooltip 
            cursor={{ fill: "transparent" }}
            contentStyle={{ 
                backgroundColor: "#1a1a1a", 
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff" 
            }}
          />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top", fill: "#fff", fontSize: 14 }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReadingGraphs;
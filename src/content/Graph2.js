import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

export default function Graph1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      const wordArray = text.toLowerCase().match(/\b\w+\b/g);
      const wordCount = {};
      wordArray.forEach((word) => {
        wordCount[word] ? (wordCount[word] += 1) : (wordCount[word] = 1);
      });
      const sortedWordCount = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20);
      setData(sortedWordCount);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data && (
        <>
          <h2>Pie chart</h2>
          <PieChart width={550} height={400}>
            <Pie
              data={data}
              dataKey="1"
              cx="50%"
              cy="50%"
            //   innerRadius={60}
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name, entry) => [value, `${entry.payload[0]}: ${value}`]} />
          </PieChart>
        </>
      )}
    </div>
  );
}

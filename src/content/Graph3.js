import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

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
          <h2>Simple Area Chart</h2>
          <AreaChart width={550} height={400} data={data}>
            <XAxis dataKey="0" />
            <YAxis />
            <Tooltip />
            <Area dataKey="1" fill="#8884d8" />
          </AreaChart>
        </>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default function Graph1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      const wordArray = text.toLowerCase().match(/\b\w+\b/g);
      const wordCount = {};
      wordArray.forEach((word) => {
        wordCount[word] ? wordCount[word]++ : (wordCount[word] = 1);
      });
      const sortedWordCount = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20);
      setData(sortedWordCount);
    };

    fetchData();
  }, []);

  const downloadCsv = () => {
    const csvData = data.map((item) => `${item[0]},${item[1]}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'histogram-data.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      {data && (
        <>
          <h2>Histogram</h2>
          <BarChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="0" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="1" fill="#8884d8" />
          </BarChart>
          <button className="btn btn-primary mt-5" onClick={downloadCsv}>
            Export
          </button>
        </>
      )}
    </div>
  );
}

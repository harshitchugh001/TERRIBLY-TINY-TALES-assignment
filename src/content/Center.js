import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function Center() {
  const [data, setData] = useState(null);
  const [questionArray, setQuestionArray] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.terriblytinytales.com/test.txt');
        const text = await response.text();
        setData(text);
        datasort(text);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const datasort = (data) => {
    const dataArray = data.split(/\d+\.\s/).filter(Boolean);
    const sortedQuestionArray = dataArray.map((item) => item.split('?')[0].trim());
    const sortedAnswerArray = dataArray.map((item) => item.replace(/.*?\?/, '').trim());

    setQuestionArray(sortedQuestionArray);
    setAnswerArray(sortedAnswerArray);
  };

  return (
    <div className='container my-5 card ' Style="width: 48rem; ">
      <h2 className='text-center'>Questions</h2>

      <div className='row my-2'>
        {questionArray.map((question, index) => (
          <div className='col-md-3  mx-3' key={index}>
            <Item title={question} description={answerArray[index]}></Item>
          </div>
        ))}
      </div>
    </div>
  );
}

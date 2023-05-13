import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Demo() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      setData(text);
    };

    const navigate = useNavigate();
    const chart = () => {
      // history.push('/chart');
      navigate('/chart');
    };
  return (
    <div className='container'>
      <div className='text-center my-5'><button className=' btn btn-primary my-5' onClick={fetchData}>Submit</button></div>
      <div className='container d-flex justify-content-between'><button className=' btn btn-primary my-5' onClick={chart}> Go to Chart</button></div>
      
      {data && <pre>{data}</pre>}

      {/* <button className='btn btn-primary mt-5' onClick={exportData}>Export</button> */}
    </div>
  )
}

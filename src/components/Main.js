import React from 'react';
// import Sidebar from '../content/Sidebar';
import Center from '../content/Center';
import Graph1 from '../content/Graph1';
import Graph2 from '../content/Graph2';
import Graph3 from '../content/Graph3';
import './Main.css'

export default function Main() {
  return (
    
    <div className="main my-5">
      {/* style={{ width: '40rem' }} */}
      <div className="" >
        <Center />
      </div>
      <div className='graph mx-2 ' >
        <div className=" container border p-4" style={{ width: '650px', overflow: 'auto' }}> <Graph1></Graph1></div>
        <div className=" container border p-4 my-5" style={{ width: '650px', overflow: 'auto' }}> <Graph2></Graph2></div>
        <div className=" container border p-4 my-5" style={{ width: '650px', overflow: 'auto' }}> <Graph3></Graph3></div>
     
      </div>

      
    </div>
  );
}
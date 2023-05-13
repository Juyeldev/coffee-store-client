import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChocolateCard from './component/ChocolateCard';

const App = () => {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates)
  return (
    <div className='lg:container mx-auto'>
      <h1 className='text-4xl text-center font-bold bg-purple-500 w-25 rounded p-4 mb-4'>Chocolate Management System</h1>
      <button className='bg-slate-300 p-2  my-5 rounded '><Link to='/addChocolate'>Add Chocolate</Link></button>
      <div>

        {
          chocolates.map(chocolate => <ChocolateCard
            key={chocolate._id}
            chocolate={chocolate}
            chocolates={chocolates}
            setChocolates={setChocolates}
            ></ChocolateCard>)
        }
      </div>

    </div>
  );
};

export default App;
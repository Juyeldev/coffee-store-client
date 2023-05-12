import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees]= useState(loadedCoffees);


  return (
    <div className='m-20'>

      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Cold Coffee Store: {coffees.length} </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
      <Link to='/addCoffee'><button className='btn btn-primary text-center'> Go Add Coffee</button></Link>
    </div>
  )
}

export default App

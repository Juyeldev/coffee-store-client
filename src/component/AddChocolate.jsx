import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddChocolate = () => {


    

    const handleAddChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const newChocolate = { name, country, photo };
        console.log(newChocolate);

        fetch('http://localhost:5000/chocolate', {
            method: 'POST',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(newChocolate),
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Chocolate Added Success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        })
        form.reset();
    }


    return (
        <div className='lg:container mx-auto'>
            <h1 className='text-4xl text-center font-bold bg-purple-500 w-25 rounded p-4 mb-4'>Chocolate Management System</h1>
            <div>
                <button className='bg-slate-300 p-2 rounded '><Link to='/'> All Chocolate</Link></button>
            </div>
            <div className='' >
                <h2 className='text-3xl font-bold text-center mb-5'>Add Chocolate</h2>
                <form onSubmit={handleAddChocolate} className='ml-56 '>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-bold">Name</span>
                        </label>
                        <label >
                            <input type="text" name='name' placeholder="Name" className="input input-bordered w-[70%] " />
                        </label>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-bold">Country</span>
                        </label>
                        <label >
                            <input type="text" name='country' placeholder="country" className="input input-bordered w-[70%] " />
                        </label>
                    </div>
                    {/* <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-bold">Category</span>
                        </label>

                        <label >

                            <select value={value} onChange={handleChange} className=" input input-bordered w-[70%]  ">
                                <option value='premium'>Premium</option>
                                <option value='famous' >Famous</option>
                                <option value='basic' >Basic</option>
                                <option value='customs'>Customs</option>
                            </select>

                        </label>
                    </div> */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-bold">Photo Url</span>
                        </label>

                        <label >
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-[70%] " />

                        </label>
                    </div>
                    <button className="btn btn-block bg-purple-500 w-[70%]" type="submit"> Add Chocolate</button>
                </form>
            </div>

        </div>
    );
};

export default AddChocolate;
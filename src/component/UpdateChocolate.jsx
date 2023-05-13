import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const chocolate = useLoaderData()
    const { _id, name, photo, country } = chocolate;

    

    const handleAddChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const updatedChocolate = { name, country, photo };
        console.log(updatedChocolate);

        fetch(`http://localhost:5000/chocolate/${_id}`, {
            method: 'PUT',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedChocolate),
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Chocolate Updated Success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        })
        form.reset();
    }




    return (
        <div>
            <h2>Update Chocolate: {name} </h2>
            <div className='lg:container mx-auto'>
                <h1 className='text-4xl text-center font-bold bg-purple-500 w-25 rounded p-4 mb-4'>Chocolate Management System</h1>
                <div>
                    <button className='bg-slate-300 p-2 rounded '><Link to='/'> All Chocolate</Link></button>
                </div>
                <div className='' >
                    <h2 className='text-3xl font-bold text-center mb-5'>Update Chocolate</h2>
                    <form onSubmit={handleAddChocolate} className='ml-56 '>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-bold">Name</span>
                            </label>
                            <label >
                                <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered w-[70%] " />
                            </label>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-bold">Country</span>
                            </label>
                            <label >
                                <input type="text" name='country' defaultValue={country}  placeholder="country" className="input input-bordered w-[70%] " />
                            </label>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-bold">Photo Url</span>
                            </label>

                            <label >
                                <input type="text" name='photo'  defaultValue={photo}  placeholder="photo url" className="input input-bordered w-[70%] " />

                            </label>
                        </div>
                        <button className="btn btn-block bg-purple-500 w-[70%]" type="submit"> Update Chocolate</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateChocolate;
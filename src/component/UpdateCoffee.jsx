import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, category, taste, details, photo } = coffee

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, category, taste, details, photo };
        console.log(updatedCoffee);
        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className='bg-[#F4F3F0] p-24 border'>
            <h2 className='text-4xl font-extrabold p-2'>Update Coffee: {name} </h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and test row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category'  defaultValue={category} placeholder="Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details}  placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo row */}
                <div className=' mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button className="btn btn-block bg-purple-600" type="submit">Add Coffee</button>
            </form>
            <Link to='/'><button className='btn btn-primary text-center'>View Coffee</button></Link>
        </div>
    );
};

export default UpdateCoffee;
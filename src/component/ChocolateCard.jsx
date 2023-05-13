import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolateCard = ({ chocolate, chocolates, setChocolates }) => {


    const { _id, name, photo, country } = chocolate;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolate/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Chocolate has been deleted.',
                                'success'
                            )
                            const remaining=chocolates.filter(choc=> choc._id !==_id);
                            setChocolates(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {name}
                                <br />

                            </td>
                            <td>{country}</td>
                            <div>
                                <th className='grid grid-cols-1 gap-4'>
                                    <button className="btn btn-ghost btn-xs  bg-red-200">
                                        <Link to={`/updateChocolate/${_id}`}>Edit</Link></button>
                                    <button
                                        onClick={() => handleDelete(_id)}
                                        className="btn btn-ghost btn-xs  bg-red-200">Delete</button>
                                </th>
                            </div>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ChocolateCard;
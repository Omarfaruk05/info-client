import React from 'react';
import { toast } from 'react-toastify';

const AddInfo = ({refetch}) => {

    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phoneNumber = e.target.phone.value;
        const email= e.target.email.value;
        const hobbies = e.target.hobbies.value;

        const info = {name, phoneNumber, email, hobbies};
        
        fetch("https://nameless-ravine-57159.herokuapp.com/data",
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(inserted => {
            console.log(inserted.insertedId)
            if(inserted.insertedId){
                toast.success('Info Added');
                refetch();
            }
            else{
                toast.error('Failed to Add Info')
            }
        });
        e.target.reset();
    } 

    return (
        <div className='flex justify-center mt-8'>
            <label htmlFor="add-modal" className="btn btn-wide bg-accent text-white">Add New Data</label>

            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                   <div className='text-center'>
                    <h1 className='text-xl font-semibold mb-2 text-primary'>Please Add Info</h1>
                        <form onSubmit={handleAddItem}>
                            <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="number" name='phone'  placeholder="Type Your Phone Number" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="email" name='email' placeholder="Type Your Email" className="input input-bordered w-full max-w-xs mb-2" required />
                            <input type="text" name='hobbies' placeholder="Type Hobbies" className="input input-bordered w-full max-w-xs mb-2" required /><br />
                            <button  type='submit'className='btn btn-danger mr-2 bg-success text-white px-6' >
                                <label htmlFor="add-modal">Save</label>
                            </button>
                        <label htmlFor="add-modal" className="btn bg-warning text-white">Cancle</label>
                        </form>
                   </div>
                   <div className="modal-action">
                        
                        
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddInfo;
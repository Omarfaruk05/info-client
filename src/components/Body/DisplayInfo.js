import React, { useState } from 'react';
import { XIcon, PencilIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify';

const DisplayInfo = ({info, refetch, index}) => {
    const [agree, setAgree] = useState(false);
    const {_id, name, phoneNumber, email, hobbies} =  info;

    const handleDelete = () => {
        fetch(`https://nameless-ravine-57159.herokuapp.com/data/${_id}`,
        {
            method: 'DELETE',
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success('Successfully Deleted'); 
                refetch();
            }
            else{
                toast.error('Failed to Delete')
            }
        })
    };

    const handleEmail =(_id) => {
        fetch('https://nameless-ravine-57159.herokuapp.com/email', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
    }

    return (
        <tr>
            <td className='flex p-6'>
                <input onClick={() => setAgree(!agree)} type="checkbox" className="checkbox mr-1"  />
                <button disabled={!agree} onClick={handleEmail} className='btn btn-xs btn-success text-white'>Send Email</button> 
            </td>
            <td className='font-semibold'>{index+1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{hobbies}</td>
            <td><XIcon onClick={()=> handleDelete()} className='h-6 w-6 text-red-500'></XIcon></td>
        </tr>
    );
};

export default DisplayInfo;
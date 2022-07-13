import React from 'react';
import { XIcon, PencilIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify';

const DisplayInfo = ({info, refetch}) => {
    const {_id, name, phoneNumber, email, hobbies} =  info;

    const handleDelete = () => {
        fetch(`http://localhost:5000/data/${_id}`,
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
    }

    return (
        <tr>
            <th><input type="checkbox" className="checkbox" /> </th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{hobbies}</td>
            <td className='grid grid-cols-2 py-6 items-center justify-center'><span><XIcon onClick={()=> handleDelete()} className='h-6 w-6 text-red-500'></XIcon></span> <span><PencilIcon htmlFor="add-modal" className='h-6 w-6 text-green-500'></PencilIcon></span></td>
        </tr>
    );
};

export default DisplayInfo;
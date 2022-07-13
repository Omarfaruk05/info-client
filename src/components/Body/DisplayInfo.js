import React from 'react';
import { XIcon, PencilIcon } from '@heroicons/react/outline'

const DisplayInfo = (info) => {
    const {name, phoneNumber, email, hobbies} =  info.info


    return (
        <tr>
            <th><input type="checkbox" className="checkbox" /></th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{hobbies}</td>
            <td className='grid grid-cols-2 py-6 items-center justify-center'><span><XIcon className='h-6 w-6 text-red-500'></XIcon></span> <span><PencilIcon className='h-6 w-6 text-green-500'></PencilIcon></span></td>
        </tr>
    );
};

export default DisplayInfo;
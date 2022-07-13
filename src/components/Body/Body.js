import React from 'react';
import AddInfo from './AddInfo';
import { useQuery } from 'react-query'
import DisplayInfos from './DisplayInfos';

const Body = () => {
    const {data: info, isLoading, refetch } = useQuery ('repoData', () => fetch('http://localhost:5000/data').then(res => res.json()));

    return (
        <div>
            <AddInfo refetch={refetch}></AddInfo>
            <DisplayInfos info={info} isLoading={isLoading}></DisplayInfos>
        </div>
    );
};

export default Body;
import React from 'react';
import AddInfo from './AddInfo';
import { useQuery } from 'react-query'
import DisplayInfos from './DisplayInfos';

const Body = () => {
    const {data: info, isLoading, refetch } = useQuery ('repoData', () => fetch('https://nameless-ravine-57159.herokuapp.com/data').then(res => res.json()));

    return (
        <div>
            <AddInfo refetch={refetch}></AddInfo>
            <DisplayInfos info={info} isLoading={isLoading} refetch={refetch}></DisplayInfos>
        </div>
    );
};

export default Body;
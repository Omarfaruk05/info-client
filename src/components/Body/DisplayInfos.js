import DisplayInfo from './DisplayInfo';
import Loading from './Loading';

const DisplayInfos = ({info, isLoading, refetch}) => {

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div>
            <div className="overflow-x-auto m-4">
                <table className="table table-zebra w-full">
                    <thead className='text-primary'>
                    <tr>
                        <th>Check Mark</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Hobbies</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            info.map((x, index) => <DisplayInfo key={x._id} info={x} refetch={refetch} index={index}></DisplayInfo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplayInfos;
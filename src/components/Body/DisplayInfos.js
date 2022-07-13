import DisplayInfo from './DisplayInfo';
import Loading from './Loading';

const DisplayInfos = ({info, isLoading}) => {

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div>
            <div className="overflow-x-auto m-4">
                <table className="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Check Mark</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Hobbies</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            info.map(x => <DisplayInfo key={x._id} info={x}></DisplayInfo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplayInfos;
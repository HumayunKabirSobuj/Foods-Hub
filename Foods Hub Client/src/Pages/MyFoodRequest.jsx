import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const MyFoodRequest = () => {
    const { user } = useContext(AuthContext);
    const loddedData = useLoaderData();

    // console.log(loddedData)
    const MyData = loddedData.filter(data => data.ClientEmail === user?.email)
    // console.log(MyData)
    // const RequestedData = MyData.filter(data => data.FoodStatus === "Requested")
    // console.log(RequestedData)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            MyData.map(Data =>
                                <tr key={Data._id}>
                                    <th></th>
                                    <td>{Data.DonatorName}</td>
                                    <td>{Data.PickupLocation}</td>
                                    <td>{new Date(Data.ExpiredDate).toLocaleDateString()}</td>
                                    <td>{new Date(Data.RequestDate).toLocaleDateString()}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import Swal from "sweetalert2";
const ManageMyFoodCard = ({ food }) => {
    // console.log(food)

    const {_id}=food;

    
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Craft has been deleted.",
                                icon: "success"
                            });
                            window. location. reload();
                           
                        }

                    })

            }
        });



    }

    return (
        <div>
            <div className="mb-10">
                <div>
                    <div className="hero mt-5 border-2 border-green-500 rounded-xl bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="">
                                <img src={food?.FoodImage} className="lg:w-[270px] w-[500px] h-[270px] lg:h-[200px] rounded-lg shadow-2xl" />
                            </div>
                            <div className=" lg:w-[1000px]">
                                <h1 className="text-3xl font-bold">{food?.FoodName}</h1>
                                <p className="py-6"> </p>
                                <div className="lg:flex  gap-10">
                                    <p className="flex gap-2 items-center"> <span className="font-bold">Food Quantity:</span> {food?.FoodQuantity} </p>
                                    <p className="flex gap-2 items-center"> <span className="font-bold">Food Status: </span>{food?.FoodStatus}  </p>
                                    <p> <span className="font-bold">Expired Date: </span>{new Date(food?.ExpiredDate).toLocaleDateString()}  </p>
                                    <p> <span className="font-bold">Pickup Location: </span>{food?.PickupLocation} </p>
                                </div>

                                <div className="lg:flex gap-8 justify-center md:flex md:gap-10 space-x-1 mt-5 ">
                                    {/* <Link
                                    to={`/crafts/${_id}`}
                                    className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
                                >
                                    View Details
                                </Link> */}
                                    <Link
                                        to={`/updateFood/${_id}`}
                                        className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(_id)}
                                        className="btn lg:w-[200px] w-20 bg-red-500 text-xl text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ManageMyFoodCard.propTypes = {

    food: PropTypes.any.isRequired,
}

export default ManageMyFoodCard;
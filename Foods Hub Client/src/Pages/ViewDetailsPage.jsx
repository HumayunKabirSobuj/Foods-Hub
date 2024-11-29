import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const ViewDetailsPage = () => {
    const { user } = useContext(AuthContext);
    const loddedData = useLoaderData();
    // console.log(loddedData)
    const { _id, AdditionalNotes, DonatorEmail, DonatorName, DonatorPhoto, ExpiredDate, FoodImage, FoodName,
        FoodQuantity,  PickupLocation } = loddedData;
    const [startDate, setStartDate] = useState(new Date());
    const navigate=useNavigate();

    const handleRequest=(id)=>{
        // console.log(id)
        const FoodStatus='Requested';
        const RequestDate=startDate;
        const ClientEmail=user?.email;
        const UpdatedData = {  FoodStatus,RequestDate,ClientEmail}; 
        if(user?.email===DonatorEmail) return toast.error("You Are Donator For This Product. You Can not Buy Your Product.")
        fetch(`${import.meta.env.VITE_API_URL}/foodBuyRequest/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(UpdatedData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            navigate('/available-food')
        })

    }
    return (
        <div className="flex justify-center">
            <div className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-[400px]" src={FoodImage} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{FoodName}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{AdditionalNotes}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center ">


                            <p className="mx-1 text-xl text-gray-600 dark:text-gray-300"> Food Quantity : {FoodQuantity}</p>
                            <p className="mx-1 text-xl text-gray-600 dark:text-gray-300">Pickup Location :  {PickupLocation}</p>

                        </div>
                        <div className="flex items-center mt-5">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={DonatorPhoto} alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{DonatorName}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>

                        <div className="flex justify-center mt-5" >
                            {/* <Link className="btn btn-active btn-accent w-2/3 ">Request</Link> */}
                            {/* <!-- modal section start --> */}
                            {/* The button to open modal */}
                            <a href="#my_modal_8" className="btn btn-active btn-accent w-2/3 ">Request</a>
                            {/* Put this part before </body> tag */}
                            <div className="modal " role="dialog" id="my_modal_8">
                                <div className="modal-box max-w-3xl">
                                    <div className="bg-[#F4F3F0] rounded-xl">
                                        <h2 className="text-3xl text-center font-bold pt-5">Request Food</h2>
                                        <div className="flex justify-center">
                                            <img className="w-1/2 h-[200px] rounded-xl my-4" src={FoodImage} alt="" />
                                        </div>
                                        <form className=" pt-5 pb-5 px-5 md:px-0 space-y-5 " >
                                            {/* user name and user email row */}
                                            <div className="md:flex md:w-3/4 gap-5 mx-auto">

                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Food Name</span>
                                                    </label>
                                                    <input type="text" name="name" defaultValue={FoodName} disabled className="input input-bordered" required />
                                                </div>
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Food Id</span>
                                                    </label>
                                                    <input type="text" name="quantity" defaultValue={_id} disabled className="input input-bordered" required />
                                                </div>


                                            </div>
                                            <div className="md:flex md:w-3/4 gap-5 mx-auto">

                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Donator Name</span>
                                                    </label>
                                                    <input type="text" name="name" defaultValue={DonatorName} disabled className="input input-bordered" required />
                                                </div>
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Donator Email</span>
                                                    </label>
                                                    <input type="text" name="quantity" defaultValue={DonatorEmail} disabled className="input input-bordered" required />
                                                </div>


                                            </div>
                                            <div className="md:flex md:w-3/4 gap-5 mx-auto">


                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">User Email</span>
                                                    </label>
                                                    <input type="text" name="user_email"  defaultValue={user?.email} disabled className="input input-bordered" required />
                                                </div>
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Expired Date </span>
                                                    </label>
                                                    <div >
                                                        <button className="input input-bordered w-full text-start text-xl" disabled>
                                                            {new Date(ExpiredDate).toLocaleDateString()}
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="md:flex md:w-3/4 gap-5 mx-auto">

                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Request Date</span>
                                                    </label>
                                                    <button className="input input-bordered w-full text-start text-xl" disabled>
                                                    <DatePicker disabled selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </button>
                                                </div>
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Pickup Location</span>
                                                    </label>
                                                    <input type="text" name="quantity" defaultValue={PickupLocation} disabled className="input input-bordered" required />
                                                </div>


                                            </div>
                                            <div className="md:flex md:w-3/4 gap-5 mx-auto">


                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Additional Notes</span>
                                                    </label>
                                                    <input type="text" name="quantity" placeholder="Type Here" className="input input-bordered" required />
                                                </div>


                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <button onClick={()=>handleRequest(_id)} href="#" className="btn bg-[#D2B48C] w-full">Request</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- modal section end --> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetailsPage;
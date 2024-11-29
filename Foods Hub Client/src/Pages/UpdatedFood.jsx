import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const UpdatedFood = () => {
    const loddedFood = useLoaderData();
    console.log(loddedFood)
    const { user } = useContext(AuthContext)

    const {_id}=loddedFood;
    // console.log(_id)

    const handleUpdateFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const AdditionalNotes = form.Additional_Notes.value;
        const FoodStatus = form.Food_Status.value;
        const FoodImage = form.image.value;

        // console.log(FoodImage)
        const UpdatedData = { AdditionalNotes, FoodStatus, FoodImage }; 
        // console.table(UpdatedData)
        fetch(`${import.meta.env.VITE_API_URL}/foods/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(UpdatedData)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount >0){
                toast.success("Craft Information Updated Succesfully")
            }
        })

    }
    return (
        <div>
            <div className="bg-[#F4F3F0] rounded-xl">
                <h2 className="text-3xl text-center font-bold pt-5">Update Food</h2>
                <form onSubmit={handleUpdateFood} className=" pt-5 pb-5 px-5 md:px-0 space-y-5 " >
                    {/* user name and user email row */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Donator Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} disabled className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Donator Email </span>
                            </label>
                            <input type="text" name="quantity" defaultValue={user?.email} disabled className="input input-bordered" required />
                        </div>


                    </div>
                    {/* item name and Subcategory_Name row */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="food_name" defaultValue={loddedFood?.FoodName} disabled placeholder="Food Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input type="number" name="food_Quantity" defaultValue={loddedFood?.FoodQuantity} disabled placeholder=" Food Quantity" className="input input-bordered" required />
                        </div>

                    </div>
                    {/* short description and price*/}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input type="text" defaultValue={loddedFood?.PickupLocation} disabled name="pickup_location" placeholder="Pickup Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Expired Date </span>
                            </label>
                            <div >
                                <button className="input input-bordered w-full text-start text-xl" disabled>
                                    {new Date(loddedFood?.ExpiredDate).toLocaleDateString()}
                                </button>
                            </div>
                            {/* <input type="text" name="price" placeholder="Expired_Date" className="input input-bordered" required /> */}
                        </div>


                    </div>
                    {/* rating and customization */}
                    <div className="md:flex md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <input type="text" name="Additional_Notes" placeholder="Additional Notes" className="input input-bordered"  />
                        </div>

                        <div className='flex flex-col  gap-2 w-full ' >
                            <label className='text-gray-700 ' htmlFor='category'>
                                Food Status
                            </label>
                            <select
                                name='Food_Status'
                                id='Food_Status'
                                className='border p-3 rounded-md'
                            >
                                <option value='Available' selected >Available</option>
                                <option value='Not Available' >Not Available</option>

                            </select>
                        </div>


                    </div>

                    {/* Photo URL */}
                    <div className="md:w-3/4 gap-5 mx-auto">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Image </span>
                            </label>
                            <input type="url" name="image" placeholder="Image_URL" className="input input-bordered"  />
                        </div>

                    </div>

                    <div className="md:w-3/4 gap-5 mx-auto">

                        <input type="submit" value="Update" className="btn bg-[#D2B48C] w-full" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatedFood;
import { Link, useLoaderData } from "react-router-dom";

const FeaturedFoodCardDetails = () => {

    const food = useLoaderData();
    // console.log(food)
    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img className="object-cover w-full h-[400px]" src={food?.food_image} alt="Article" />

                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{food?.food_name}</a>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{food?.additional_notes}</p>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center ">


                                <p className="mx-1 text-xl text-gray-600 dark:text-gray-300"> Food Quantity : {food?.food_quantity}</p>
                                <p className="mx-1 text-xl text-gray-600 dark:text-gray-300">Pickup Location :  {food?.pickup_location}</p>

                            </div>
                            <div className="flex items-center mt-5 ">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={food?.donator?.image} alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{food?.donator?.name}</a>
                                </div>
                                <div>
                                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{food?.expired_date_time}</span>
                                </div>
                            </div>

                            <div className="flex justify-center my-5">
                                <Link className="btn btn-active btn-accent w-1/3" to='/'>Back To Home</Link>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedFoodCardDetails;
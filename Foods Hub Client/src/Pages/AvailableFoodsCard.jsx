
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AvailableFoodsCard = ({ food }) => {
    const { _id } = food;
    // console.log(food)
    
    return (
        <div className="mt-5 lg:px-0 px-5">
            <div className=" overflow-hidden h-[600px] bg-white rounded-lg shadow-md dark:bg-gray-800" data-aos="zoom-in" data-aos-duration="1000">
                {/* <img className=" w-full h-64" src={food.food_image} > </img> */}
                <img className=" w-full h-64 " src={food?.FoodImage} alt="" />
                <div className="p-6 space-y-5">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <p href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{food?.FoodName}</p>
                        <p title={food?.AdditionalNotes} className="mt-2 text-sm text-gray-600 dark:text-gray-400">{food?.AdditionalNotes.substring(0, 80)}...</p>
                    </div>
                    <div className="mt-4 space-y-5 ">

                        <div className="flex items-center ">


                            <p className="mx-1 text-xs text-gray-600 dark:text-gray-300"> Food Quantity : {food?.FoodQuantity}</p>
                            <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">Pickup Location :  {food?.PickupLocation}</p>
                        </div>
                        <div className="flex items-center ">

                            <img src={food.DonatorPhoto} className='object-cover h-10 rounded-full' alt="" />
                            <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{food?.DonatorName}</p>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Expired In :

                                {new Date(food?.ExpiredDate).toLocaleDateString()}


                            </span>

                        </div>
                    </div>

                    <Link to={`/foods/${_id}`}  className='btn btn-accent w-full rounded-xl'>View Detail</Link>
                </div>
            </div>

        </div>
    );
};

AvailableFoodsCard.propTypes = {

    food: PropTypes.any.isRequired,
}

export default AvailableFoodsCard;
import PropTypes from 'prop-types';
import FeaturedFoodCard from './FeaturedFoodCard';
import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
const FeaturedFoods = ({ featuredfoodsData }) => {
    // console.log(featuredfoodsData)

    // const { data } = useQuery({
    //     queryKey: ["foodData"],
    //     queryFn: async () => {
    //         return await fetch(`${import.meta.env.VITE_API_URL}/foods`)
    //     }
    // })

    // console.log(data)
    return (
        <div className="mt-5 space-y-8">
            <h1 className="lg:text-4xl text-3xl font-bold text-center">Featured Foods</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-0' >
                {
                    featuredfoodsData.map(food => <FeaturedFoodCard food={food} key={food._id}></FeaturedFoodCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/available-food' className=' md:w-1/3 btn btn-outline btn-success text-xl'> Show All</Link>
            </div>
        </div>
    );
};


FeaturedFoods.propTypes = {

    featuredfoodsData: PropTypes.any.isRequired,
}
export default FeaturedFoods;
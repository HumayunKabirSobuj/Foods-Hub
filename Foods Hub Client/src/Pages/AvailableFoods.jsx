import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { useEffect, useState } from "react";


const AvailableFoods = () => {
    const [search, addSearch] = useState([]);
    const [sortedFood, addSortedFood] = useState([]);
    const AllFoods = useLoaderData();
    // console.log(foods)

    

    useEffect(() => {
        const Foods = AllFoods.filter(food => food?.FoodStatus === 'Available')
        addSortedFood(Foods)
    }, [AllFoods])
    // console.log(Foods)

    const handleSerch = (e) => {
        const Search = sortedFood.filter(Food => Food?.FoodName.toLowerCase().includes(e.target.value.toLowerCase()))
        addSearch(Search)

    }
    // console.log(sortedFood)

    // const handleSort = (e) => {
    //     const date = e.target.value;
    //     console.log(date)
    //     if (e.target.value === "oldest") {
    //         const sortedFoods = sortedFood.sort((a, b) => {
    //             // console.log(a.ExpiredDate, b.ExpiredDate)
    //             console.log(new Date(b.ExpiredDate).getTime())
    //             return new Date(b.ExpiredDate).getTime() -
    //                 new Date(a.ExpiredDate).getTime()

    //         }).reverse();

    //         addSortedFood(sortedFoods)
    //     }
    //     else if (e.target.value === "newest") {
    //         const sortedFoods = sortedFood.sort((a, b) => {
    //             return new Date(a.ExpiredDate).getTime() -
    //                 new Date(b.ExpiredDate).getTime()
    //         }).reverse();

    //         addSortedFood(sortedFoods)
    //     }


    // }





    // console.log(search)
    return (
        <div>
            <div className="">
                <label className="input input-bordered flex items-center gap-2 my-5 max-w-3xl mx-auto">
                    <input onInput={handleSerch} type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                {/* <div className="flex justify-center">
                    <div className="my-5 space-y-3">
                        <div className="flex justify-center">
                            <h2 className="">Sort By Date</h2>
                        </div>
                        <select onChange={handleSort} className=" z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <option value={'oldest'}>Oldest</option>
                            <option value={'newest'}>Newest</option>

                        </select>
                    </div>
                </div> */}
            </div>
            <h2 className="text-3xl font-bold text-center">Available Foods Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-8 gap-5">

                {
                    search.length > 0 ? search.map(food => <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>) :
                        sortedFood.map(food => <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
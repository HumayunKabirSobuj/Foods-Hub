import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ManageMyFoodCard from "./ManageMyFoodCard";



const ManageMyFood = () => {

    const { user } = useContext(AuthContext);
    const foods = useLoaderData()

    // console.log(foods)
    const myFoods = foods.filter(food => food?.DonatorEmail === user?.email)




    // console.log(myFoods)




    return (
        <div>

          <h1 className="text-3xl font-bold text-center">Manage My Food </h1>
          {
            myFoods.map(food=><ManageMyFoodCard key={food._id} food={food}></ManageMyFoodCard>)
          }
        </div>
    );
};

export default ManageMyFood;
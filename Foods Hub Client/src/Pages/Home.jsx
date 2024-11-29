import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import FeaturedFoods from "../Components/FeaturedFoods";
import TermsAndCondition from "./TermsAndCondition";
import ReleventSection from "./ReleventSection";


const Home = () => {
    const featuredfoodsData = useLoaderData();
    // console.log(featuredfoodsData)
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <FeaturedFoods featuredfoodsData={featuredfoodsData}></FeaturedFoods>
            <TermsAndCondition></TermsAndCondition>
            <ReleventSection></ReleventSection>
        </div>
    );
};

export default Home;
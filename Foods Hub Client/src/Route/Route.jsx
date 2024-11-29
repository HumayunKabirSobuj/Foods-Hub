
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";
import { useEffect } from "react";


const Route = () => {
    const loc = useLocation();
    useEffect(() => {
        if (loc.pathname === '/') {
            document.title = 'Foods Hub | Home'
        }
        else {
            document.title = `Foods Hub ${ loc.pathname.replace('/', '| ') }`
        }
        if (loc.pathname === '/featuredfoods') {
            document.title = 'Foods Hub | Featured Foods'
        }
        if (loc.state) {
            document.title = `Foods Hub || ${ loc.state }`
        }
    }, [loc.pathname, loc.state]);


    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-10 ">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Route;
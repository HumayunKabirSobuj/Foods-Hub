import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('Log Out Successfully');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/available-food'>Available Foods</NavLink></li>
        {user && (
            <>
                <li><NavLink to='/add-food'>Add Food</NavLink></li>
                <li><NavLink to='/manage-my-food'>Manage My Foods</NavLink></li>
                <li><NavLink to='/my-food-request'>My Food Request</NavLink></li>
            </>
        )}
    </>;

    return (
        <div>
            <div className="navbar bg-base-100 z-50">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link to='/'><img className="w-12 h-12" src="https://i.ibb.co.com/3yGbZc7/logo.jpg" alt="" /></Link>
                        <Link to='/' className="btn btn-ghost text-xl">Foods Hub</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex z-50">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                    <div className="avatar online">
                                        <div className="w-10 rounded-full">
                                            
                                            <img src={"https://i.ibb.co.com/MGCNtq2/user.png"} title={user?.displayName} alt="User Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-20">
                                <button onClick={handleLogOut}>LogOut</button>
                            </ul>
                        </div>
                    ) : (
                        <Link className="btn btn-ghost btn-active btn-sm md:btn-md" to='/login'>Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// 

import { MdAddAPhoto } from "react-icons/md";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { Player } from "@lottiefiles/react-lottie-player";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();

    const { registerUser } = useContext(AuthContext);

    // console.log(registerUser)


    const [passError, setPassError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, photo, password } = data

        // console.log(name)



        if (password.length < 6) {
            setPassError('Password must be 6 character or longer')
            return;


        }

        if (!/[A-Z]/.test(password)) {
            setPassError('At Least One Upper Case Carracter Need')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPassError('At Least One Lower Case Carracter Need')
            return;
        }

        registerUser(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                console.log(user)
                // navigate('/')

                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                        toast.success("Register With Email & Password Successfully")
                        window.location.reload();
                    }).catch((error) => {
                        console.error(error)
                    });

                navigate("/")
            })
            .catch(error => {
                console.error(error)


            })

        // console.log(data)

    }
    return (
        <div className="my-5 lg:px-0 px-5">
            <div className='flex  justify-center items-center min-h-[calc(100vh-100px)]'>
                <div className='flex flex-row items-center w-full max-w-sm mx-auto overflow-hidden bg-[#F7F5EC] rounded-lg shadow-lg  lg:max-w-4xl '>
                    <div className="flex-1 hidden md:flex">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/3510f7fd-3e96-47ba-89bb-f04cb922fc6f/3iVNblbPMG.json"
                            style={{ height: '400px', width: '400px' }}
                        >

                        </Player>
                    </div>

                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 flex-1 space-y-3'>


                        <p className='mb-3 text-4xl font-bold text-center text-gray-600 '>
                            Register Here
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Name"

                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className="grow" placeholder="Email"

                                    {...register("email", { required: true })}

                                />

                                {errors.email && <span className="text-red-500">This field is required</span>}

                            </label>

                            <label className="input input-bordered flex items-center gap-2">

                                <MdAddAPhoto />
                                <input type="url" className="grow" placeholder="Photo URL"
                                    {...register("photo", { required: true })}
                                />
                                {errors.photo && <span className="text-red-500">This field is required</span>}

                            </label>


                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>

                                <div className="flex items-center justify-between w-full">

                                    <input type={showPassword ? "text" : "password"} className="grow w-full " placeholder="Password"
                                        {...register("password", { required: true })}

                                    />
                                    <p className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </p>
                                </div>
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                {passError && <span className="text-red-500">{passError}</span>}

                            </label>

                            <input type="submit" value="Register" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'" />
                            <div className='flex items-center justify-between mt-4'>
                                <span className='w-1/5 border-b  md:w-1/4'></span>

                                <Link
                                    to='/login'
                                    className='text-xs mt-3 text-gray-500 uppercase  hover:underline'
                                >
                                    or Login
                                </Link>

                                <span className='w-1/5 border-b  md:w-1/4'></span>
                            </div>
                        </form>




                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;
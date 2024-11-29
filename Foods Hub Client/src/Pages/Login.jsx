import { Link, useNavigate } from "react-router-dom"
import { Player, } from '@lottiefiles/react-lottie-player';
import { FaEye, FaEyeSlash, FaGithub, } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";


const Login = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { googleLogin, emailPassowordLogin, githubLogin } = useContext(AuthContext)
    // console.log(githubLogin)


    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                // console.log(result.user)
                toast.success('Login with Google Succesfully')
                navigate("/")
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubLogin = () => {

        githubLogin()
            .then(() => {
                // console.log(result.user)
                toast.success('Login with Github Succesfully')
                navigate("/")
            })
            .catch(error => {
                console.error(error)
            })

    }

    // console.log(emailPassowrdLog)

    const handleEmailPasswordLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        emailPassowordLogin(email, password)
            .then(() => {
                toast.success('Login With Email & Password Successfully')
                navigate("/")
                // window.location.reload();
            })
            .catch(error => {
                toast.error(error.message)
            })


    }
    return (
        <div className='flex  justify-center items-center min-h-[calc(100vh-100px)] '>
            <div className='flex flex-row-reverse items-center w-full max-w-sm mx-auto overflow-hidden bg-[#F7F5EC] rounded-lg shadow-lg  lg:max-w-4xl '>
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
                        Login Here
                    </p>




                    <div className='space-y-5 px-4 w-full'>
                        <button onClick={handleGoogleLogin} className='btn  w-full bg-none border'><FaGoogle /> <span>Login With Google</span> </button>
                        <button onClick={handleGithubLogin} className='btn  w-full bg-none border'><FaGithub /> <span>Login With Github</span> </button>
                    </div>






                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleEmailPasswordLogin} className="space-y-3">



                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" className="grow" name="email" placeholder="Email" required />


                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>

                            <div className="flex items-center justify-between w-full">

                                <input type={showPassword ? "text" : "password"} className="grow w-full " placeholder="Password" name="password" required />
                                <p className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </p>
                            </div>

                        </label>

                        <input type="submit" value="Login" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'" />
                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/register'
                                className='text-xs mt-3 text-gray-500 uppercase  hover:underline'
                            >
                                or Register
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </form>




                </div>
            </div>
        </div>
    )
}

export default Login
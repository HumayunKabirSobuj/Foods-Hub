import { createContext, useEffect, useState, } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }



    const emailPassowrdRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    const emailPassowordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser)



        }));
        return () => {
            unSubscribe();
        }
    }, [])








    const AuthInfo = {

        googleLogin,
        emailPassowrdRegister,
        registerUser,
        user,
        logOutUser,
        emailPassowordLogin,
        loading,
        githubLogin



    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;





// const AuthProvider = ({ children }) => {








//     // const githubProvider = new GithubAuthProvider();
//     // const GithubLogin = () => {
//     //     setLoading(true)
//     //     return signInWithPopup(auth, githubProvider)
//     // }





//     const AuthInfo = {
//         user,
//         registerUser,
//         loginUser,
//         loading,
//         GoogleLogin,
//         GithubLogin

//     }

//     return (
//         <AuthContext.Provider value={AuthInfo}>
//             {
//                 children
//             }

//         </AuthContext.Provider>
//     );
// };
// AuthProvider.propTypes = {
//     children: PropTypes.node,
// }
// export default AuthProvider;
import { Link } from "react-router-dom";
import { Player, } from '@lottiefiles/react-lottie-player';

const Error = () => {
    return (
        <div>
        <section className="flex items-center  p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                   
                     <Player
                        autoplay
                        loop
                        src="https://lottie.host/9b09e870-6b71-4023-ac6b-711bf2788641/VTgD7HN7JL.json"
                        style={{ height: '300px', width: '300px' }}
                    >

                    </Player>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="btn btn-secondary">Back to homepage</Link>
                </div>
            </div>
        </section>
    </div>

    );
};

export default Error;
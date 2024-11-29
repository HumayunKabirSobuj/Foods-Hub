import { Typewriter } from "react-simple-typewriter";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Banner = () => {
    return (
        <div className='lg:mt-5 mt-4'>

            {/* 
            
            




            */}

            <Swiper
                spaceBetween={30}
                
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide><div id="slide1" className="carousel-item relative w-full h-[500px] ">
                    
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/Ph2KnMC/slider1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find 

                                    <Typewriter
                                        words={[' HarvestHub', ' FeastFinder', ' BountyShare', ' MealMatch',]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>


                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div id="slide2" className="carousel-item relative w-full h-[500px] ">
                  
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/4KQSRPR/Slider2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[' ShareDish', 'FarmFork', ' FeedForward', '  MealMatch']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>



                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide ><div id="slide3" className="carousel-item relative w-full h-[500px]">
                    
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/vLDSyXQ/Slider3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[' FarmFork', ' FeastFinder', ' HarvestHub', 'FarmFork']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>

                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide  > <div id="slide4" className="carousel-item relative w-full h-[500px]">
                  
                    <div className="hero rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/4VwLCJ0/Slider4.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">You Can Find

                                    <Typewriter
                                        words={[' ShareDish', ' FarmFork', ' BountyShare', ' MealMatch']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </h1>


                            </div>
                        </div>
                    </div>

                </div></SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Banner;
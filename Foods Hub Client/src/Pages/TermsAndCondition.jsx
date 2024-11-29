
const TermsAndCondition = () => {
    return (
        <div className="mt-10">
            <div>
                <div className="space-y-5 lg:mb-10 mb-6 ">
                    <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center lg:text-6xl text-3xl font-bold font-sans bg-gradient-to-r from-primary via-red-600 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">About Us</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" className="text-center lg:text-3xl text-base font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">WELCOME TO OUR COMPANY WEBSITE</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:items-center">

                    <div className="lg:hidden flex items-center">
                        <img className="w-1/2 mx-auto" src="https://i.ibb.co.com/3yGbZc7/logo.jpg" alt="" />
                    </div>
                    <div className="lg:col-span-2 space-y-4">

                        <p className=" lg:text-3xl text-2xl font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300% ">About our Company & Terms :</p>

                        {/* acordian start here */}

                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    User-Generated Content (UGC)
                                </div>
                                <div className="collapse-content">
                                    <p>
                                        Content created by users, like recipes, reviews, and photos, driving engagement and community interaction on SharePlenty.                                  </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                    Community Guidelines
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Rules and standards ensuring respectful interactions among users, fostering a safe and inclusive environment on the platform.


                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Peer-to-Peer (P2P)
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Direct exchange between users without intermediaries, facilitating seamless sharing experiences on SharePlenty.

                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Sustainability
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Practices aimed at reducing waste and promoting eco-friendly sharing habits, aligning with SharePlentys mission for responsible consumption.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Food Safety Compliance
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Standards and regulations ensuring shared food is safe for consumption, prioritizing user well-being on SharePlenty.

                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Sharing Economy

                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Model where users share access to goods and services, embodying SharePlentys ethos of collaborative consumption.

                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* acordian start here */}

                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="3000" className=" lg:flex hidden items-center justify-center">
                        <img className="w-4/6" src="https://i.ibb.co.com/3yGbZc7/logo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndCondition;
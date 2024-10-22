const Banner = () => {
    return (
        <div>
            <div className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10" style={
                {
                    backgroundImage: 'url(https://i.ibb.co.com/37YhQkZ/2148869911.jpg)',
                }
            }>
                <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                    <h1 className="font-bold  md:text-[3.25rem]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-lg  font-normal">
                        Whether you are beginner or a seasoned chef, our expert-led sessions offer personalized guidance and inspiration. Join us for an enriching culinary experience that sure to ignite your passion for food and cooking.
                    </p>
                    <div className="flex gap-4 text-xl font-semibold">
                        <button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
                        <button className="btn btn-outline  hover:bg-green-400 rounded-full border-none">Our Feedback</button>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';

const Slider = () => {
    const slides = [
        {
            id: 1,
            title: 'Experience the Magic of Cinema',
            description: 'Dive into the world of movies that touch your heart and inspire your soul.',
            image: 'https://via.placeholder.com/800x400?text=Slide+1', // Replace with actual URLs
        },
        {
            id: 2,
            title: 'Unforgettable Stories Await',
            description: 'Discover timeless tales and epic adventures on the big screen.',
            image: 'https://via.placeholder.com/800x400?text=Slide+2', // Replace with actual URLs
        },
        {
            id: 3,
            title: 'Your Favorite Movies, Anytime',
            description: 'Explore a collection of classics and new releases just for you.',
            image: 'https://via.placeholder.com/800x400?text=Slide+3', // Replace with actual URLs
        },
    ];

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            <div className="flex w-full h-full animate-scroll">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg md:text-xl">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

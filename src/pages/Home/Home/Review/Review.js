import { ClockIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Henry Jacky',
            description: 'Proactively re-engineer competitive schemas without viral collaboration and idea-sharing. Completely envisioneer sustainable e-commerce rather than goal-oriented mindshare. Synergistically provide access.',
            location: 'California',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQti6tqdJ7FOazpZLYD1Urg3FnzlNLYiO1Gzdu7kzPvJyA8J6p8Rjy7Vsf_cUjyJ-BAqnA&usqp=CAU"
        },
        {
            _id: 2,
            name: 'Robert Downrey',
            description: 'Professionally envisioneer pandemic partnerships before effective technologies. Conveniently transform high-quality innovation via extensive processes. Objectively grow bleeding-edge internal or "organic".',
            location: 'New York',
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        },
        {
            _id: 3,
            name: 'Hugh Jackman',
            description: 'Phosfluorescently target diverse growth strategies and reliable value. Dynamically cultivate goal-oriented potentialities before value-added deliverables. Continually develop high-payoff systems whereas.',
            location: 'England',
            img: "https://img.freepik.com/darmowe-zdjecie/portret-przystojny-mlody-czlowiek-z-skrzyzowanymi-rekami_176420-15569.jpg?w=2000"
        }
    ]
    return (
        <section className='my-20'>
            <div className='flex items-center my-8 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-3xl dark:text-gray-400'>
                    Reviews
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <h2 className='text-3xl'>What Our Buyer Says,</h2>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;
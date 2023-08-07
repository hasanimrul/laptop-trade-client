import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, image, name, description } = category
    return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{description}</p>
        //         <div className="card-actions justify-end">
        //             <Link to={`/category/${_id}`} className="btn btn-primary">See all</Link>
        //         </div>
        //     </div>
        // </div>
        <div className="">
            <div className=" flex flex-col bg-gray-100 border-0 shadow-soft-xl rounded-2xl p-5">
                <div className="">
                    <a className="shadow-xl rounded-2xl" href={`/category/${_id}`}>
                        <img src={image} alt="img-blur-shadow" className="h-80 w-full shadow-soft-2xl rounded-2xl" />
                    </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                    <a href="javascript">
                        <h5 className='font-bold text-xl'>{name}</h5>
                    </a>
                    <p className="mb-6 leading-normal text-sm">{description}</p>
                    <div className="flex items-center justify-center">
                        <Link to={`/category/${_id}`} type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-sky-500 text-sky-500 hover:border-sky-500 hover:bg-transparent hover:text-sky-500 hover:opacity-75 hover:shadow-none active:bg-sky-500 active:text-white active:hover:bg-transparent active:hover:text-sky-500">View Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
import React from 'react';

const Apple = () => {
    return (
        <div className="card mx-auto w-fit bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Apple</h2>
                <p>Dynamically evolve standards compliant models whereas web-enabled core.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Apple;
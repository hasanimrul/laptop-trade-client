import React from 'react';

const HomeBanner = () => {
    return (
        <div className="hero min-h-fit" style={{ backgroundImage: `url("https://media.istockphoto.com/id/517619651/vector/market-research-banner.jpg?s=170667a&w=0&k=20&c=VjIXZuEGKYfALg1FZlg1TRbqBiqvaR-dfU7J12fLBA4=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to Laptop Trade</h1>
                    <p className="mb-5">Uniquely procrastinate enterprise benefits without equity invested growth strategies.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
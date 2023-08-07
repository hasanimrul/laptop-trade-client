import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from './../../../Assets/banner1.png'
import img2 from '../../../Assets/banner2.png'
import img3 from '../../../Assets/banner3.png'
import img4 from '../../../Assets/banner4.png'
import bg from '../../../Assets/slider-bg.jpg'
import bg2 from '../../../Assets/banner-bg.jpg'
import bg3 from '../../../Assets/web-bg.jpg'

const HomeBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg2})` }} className='py-32 bg-right bg-no-repeat w-cover container mx-auto'>
            <Swiper

                modules={[Navigation, Autoplay, Pagination, Scrollbar]}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='flex items-center'>

                        <div className='mx-20 text-justify'>
                            <p>Dramatically repurpose team driven scenarios whereas interdependent total linkage. Objectively reintermediate orthogonal total linkage vis-a-vis covalent convergence. Distinctively benchmark strategic intellectual capital without robust bandwidth. Seamlessly customize bleeding-edge niches.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-sky-600 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                        <img src={img2} className='' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center'>
                        <img src={img4} className='' alt='' />
                        <div className='mx-20 text-justify'>
                            <p>Objectively integrate magnetic core competencies with standardized markets. Seamlessly matrix orthogonal functionalities with team building opportunities. Intrinsicly visualize reliable leadership skills without intuitive ROI. Interactively scale one-to-one action items.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-sky-600 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center'>

                        <div className='mx-20 text-justify'>
                            <p>Authoritatively deploy economically sound methodologies vis-a-vis next-generation communities. Completely brand user friendly supply chains before process-centric interfaces. Conveniently strategize team driven e-services without covalent best practices. Enthusiastically implement resource-leveling.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-sky-600 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                        <img src={img3} className='' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center'>
                        <img src={img1} className='' alt='' />
                        <div className='mx-20 text-justify'>
                            <p>Credibly matrix magnetic strategic theme areas through next-generation customer service. Quickly benchmark adaptive data without sustainable channels. Dramatically evisculate collaborative action items vis-a-vis extensive total linkage. Distinctively evisculate fully.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-sky-600 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeBanner;
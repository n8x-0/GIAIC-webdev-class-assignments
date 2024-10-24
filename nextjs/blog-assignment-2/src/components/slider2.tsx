"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { myBlogs } from '@/utils/blog-data';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const slider2 = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={8}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: true,
            }}
            speed={3000}
            effect="coverflow"
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: false,
                scale: 0.8,
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '@1.50': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
        >
            {myBlogs.map((data, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Link href={`/articles/${data.id}`}>
                            <div className='w-full h-60 overflow-hidden relative rounded-3xl shadow-md cursor-pointer'>
                                <div className="absolute top-0 right-0 md:m-6 m-3 bg-white rounded-full p-3 shadow-md scaler">
                                    <MdArrowOutward />
                                </div>
                                <Image src={data.image} alt={data.image} width={800} height={800} className='w-full h-full object-cover' />
                            </div>
                            <h2 className='text-xs font-medium mt-2 mb-1'>&bull; {data.category}</h2>
                            <h1 className='text-xl font-medium leading-6 tracking-tighter'>
                                {data.text}
                            </h1>
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}

export default slider2
"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const midSecCards = [
    {
        image: "/midSecCards/popularProducts.png",
        title: "Popular Products",
        color: "bg-[#FFFFFF]",
        border: "border-black"
    },
    {
        image: "/midSecCards/ipadPro.png",
        title: "Ipad Pro",
        color: "bg-[#F9F9F9]",
        border: "border-black"
    },
    {
        image: "/midSecCards/samsung.png",
        title: "Samsung Galaxy",
        color: "bg-[#EAEAEA]",
        border: "border-black"
    },
    {
        image: "/midSecCards/macbook.png",
        title: "Macbook Pro",
        color: "bg-[#2C2C2C] text-white border-white",
        border: "border-white"
    },
]

const ShopNowCards = () => {
    return (
        <div className="w-full">
            <Swiper
                centeredSlides={false}
                slidesPerView={4}
                breakpoints={{
                    1500: { slidesPerView: 4 },
                    1200: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 },
                    320: { slidesPerView: 1 }
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true
                }}
                speed={1000}
                pagination={{
                    clickable: true
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full"
            >

                {midSecCards.map((data, index) => {
                    return (
                        <SwiperSlide className="w-full flex md:text-left text-center" key={index}>
                            <div className={` p-10 md:py-10 py-12 ${data.color}`}>
                                <div className="w-full h-80">
                                    <Image src={data.image} alt={data.image} width={500} height={500} className="w-full h-full object-contain" />
                                </div>
                                <h1 className="text-3xl font-light">{data.title}</h1>
                                <p className="text-[#919191] mt-2">
                                    iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                                </p>
                                <button className={`px-12 py-4 border-[1px] rounded-md mt-5 text-lg font-medium ${data.border}`}>
                                    Shop Now
                                </button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default ShopNowCards
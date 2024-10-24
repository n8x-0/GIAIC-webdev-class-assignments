"use client"

import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

type Props = {
    category: string,
    text: string,
    image: string,
    id: number,
}

const slider = ({ arr }: { arr: Props[] }) => {
    return (
        <div className="w-full h-full">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true
                }}
                speed={1000}
                pagination={{
                    clickable: false
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-full"
            >
                {arr.map((data, index) => {
                    return (
                        <SwiperSlide key={index} className="w-full h-full relative flex justify-between items-center">
                            <Image src={data.image} alt={data.image} width={1920} height={1080} className="w-full h-full object-cover absolute top-0 left-0" />

                            <div className="w-full flex justify-between items-start absolute top-0 sm:p-6 p-3">
                                <div className="">
                                    <div className="font-medium sm:text-sm text-xs sm:px-6 px-4 sm:py-2 py-1 border-[1px] bg-white w-fit rounded-full sm:mb-2 mb-1">{new Intl.DateTimeFormat('en-GB', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date()).replace(/(\d+)([a-zA-Z]+)/, '$2 $1').replace(/ /g, ' ').replace(/,/, ', ')}</div>
                                    <div className="font-medium sm:text-sm text-xs sm:px-6 px-4 sm:py-2 py-1 border-[1px] text-white border-white w-fit rounded-full mix-blend-difference">&bull; {data.category}</div>
                                </div>

                                <div className="tracking-tight w-fit md:leading-2 leading-5 h-fit flex flex-col">
                                    <span className="px-4 py-1 bg-white rounded-t-xl text-sm font-semibold w-fit">&bull; {data.category}</span>
                                    <span className="font-[sauda] font-semibold sm:text-5xl text-2xl leading-5 sm:px-4 px-3 bg-white sm:py-3 py-2 inline-block md:w-[400px] w-60 text-left rounded-2xl rounded-tl-none">{data.text}</span>
                                </div>
                            </div>
                            <Link href={`/articles/${data.id}`}>
                                <div className="absolute bottom-0 right-0 md:m-6 m-3 bg-white rounded-full sm:p-4 font-bold p-3 shadow-md scaler"><MdArrowOutward /></div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default slider
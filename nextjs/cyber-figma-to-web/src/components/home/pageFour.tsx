import Image from "next/image"
import Card from "../card"

const pageFourCards = [
    {
        image: "/cardImages/pg3Airpods.png",
        title: "AirPods Max Silver Starlight Aluminium ",
        price: "$549"
    },
    {
        image: "/cardImages/pg3galaxybuds.png",
        title: "Galaxy Buds FE Graphite",
        price: "$99.99"
    },
    {
        image: "/cardImages/pg3appleipad.png",
        title: `Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`,
        price: "$398"
    },
    {
        image: "/cardImages/pg3iphone.png",
        title: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
        price: "$900"
    }
]

const PageFour = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="lg:w-[80%] py-20 px-4">
                <h1 className="w-full text-2xl font-medium">Discounts up to -50%</h1>
                <div className="w-full flex justify-around items-center flex-wrap mt-6 md:gap-5 gap-3">
                    <Card arr={pageFourCards} />
                </div>
            </div>
            <div className="w-full h-[448px] relative flex justify-center items-center text-white flex-col gap-5 p-4 text-center">
                <h1 className="text-6xl font-thin">Big Summer <b className="font-medium">Sale</b></h1>
                <span className="text-[#787878]">Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
                <button className="px-12 py-4 border-[1px] border-white rounded-md mt-5 text-lg font-medium">
                    Shop Now
                </button>
                <Image src="/pagefourbanner/banner.png" alt="banner" width={1920} height={800} className="w-full h-full object-cover absolute top-0 left-0 -z-10" />
            </div>
        </div>
    )
}

export default PageFour
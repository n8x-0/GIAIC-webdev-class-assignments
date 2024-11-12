import Card from "../card"

const pg3cards = [
    {
        image: "/cardImages/pg3iphone.png",
        title: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
        price: "$900"
    },
    {
        image: "/cardImages/pg3camera.png",
        title: "Blackmagic Pocket Cinema Camera 6k",
        price: "$2532"
    },
    {
        image: "/cardImages/pg3AppleWatch.png",
        title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
        price: "$399"
    },
    {
        image: "/cardImages/pg3Airpods.png",
        title: "AirPods Max Silver Starlight Aluminium ",
        price: "$549"
    },
    {
        image: "/cardImages/pg3SamsungWatch.png",
        title: "Samsung Galaxy Watch6 Classic 47mm Black",
        price: "$369"
    },
    {
        image: "/cardImages/pg3galaxy.png",
        title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
        price: "$1799"
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
]

const PageThree = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center py-20 px-4">
            <div className="lg:w-[80%] flex justify-center items-center flex-col">
                <div className="flex sm:gap-6 gap-3 w-full font-medium sm:text-lg text-sm text-[#888888]">
                    <div className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4 cursor-pointer">New Arrival</div>
                    <div className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4 cursor-pointer">Bestseller</div>
                    <div className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4 cursor-pointer">Featured Products</div>
                </div>

                <div className="flex flex-wrap md:gap-5 gap-3 mt-8 justify-around">
                    <Card arr={pg3cards} />
                </div>
            </div>
        </div>
    )
}

export default PageThree
import Image from "next/image"

const browseCategorySection = [
    {
        name: "Phone",
        icon: "/browseCat/browseCategoryphone.png",
    },
    {
        name: "Smart Watches",
        icon: "/browseCat/smartwatches.png",
    },
    {
        name: "Cameras",
        icon: "/browseCat/browseCategoryCameras.png",
    },
    {
        name: "Headphones",
        icon: "/browseCat/browseCategoryHeadphones.png",
    },
    {
        name: "Computers",
        icon: "/browseCat/computers.png",
    },
    {
        name: "Gaming",
        icon: "/browseCat/gaming.png",
    },
]

const BrowseCategorySec = () => {
    return (
        <div className="w-full flex justify-center items-center py-20 px-4 bg-[#FAFAFA]">
            <div className="lg:w-[80%] flex items-center flex-col">
                <div className="w-full flex justify-between items-center">
                    <h1 className="sm:text-2xl text-base font-medium">Browse By Category</h1>
                    <div className="flex sm:gap-6 gap-3">
                        <div className="sm:w-10 sm:h-10 w-8 h-8"><Image src="/navLeft.png" alt="navLeft.png" width={500} height={500} className="object-cover" /></div>
                        <div className="sm:w-10 sm:h-10 w-8 h-8"><Image src="/navRight.png" alt="navLeft.png" width={500} height={500} className="object-cover" /></div>
                    </div>
                </div>
                <div className="flex justify-center mt-8 w-full flex-wrap gap-5">
                    {browseCategorySection.map((data, index) => {
                        return (
                            <div key={index} className="bg-[#EDEDED] sm:w-48 sm:h-40 w-36 h-36 rounded-xl flex flex-col justify-center gap-1 items-center">
                                <div className="sm:w-14 sm:h-14 w-12 h-12">
                                    <Image src={data.icon} alt="pg3phone.png" width={500} height={500} className="w-full h-full object-cover" />
                                </div>
                                <span className="sm:text-lg text-base font-medium">{data.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BrowseCategorySec
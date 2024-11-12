import Image from "next/image"

const PageOne = () => {
    return (
        <div className="w-full md:h-[90vh] h-screen bg-[#211C24] pt-20 flex xl:flex-row flex-col xl:justify-center justify-between items-center xl:gap-40 overflow-hidden">
            <div className="xl:text-left text-center lg:my-auto sm:mt-24 mt-10">
                <h2 className="text-[#909090] text-2xl font-medium">Pro.Beyond.</h2>
                <h1 className={`xl:text-8xl md:text-[6rem] sm:text-7xl text-6xl text-white font-thin md:mt-0 mt-2`}>IPhone 14 <b className="font-medium">Pro</b></h1>
                <h2 className="text-[#909090] font-medium text-lg md:mt-0 mt-2">Created to change everything for the better. For everyone</h2>
                <button className="px-10 py-3 border-[1px] border-white text-white rounded-md mt-5">
                    Shop Now
                </button>
            </div>
            <div className="xl:h-full w-fit h-fit flex justify-end">
                <div className="xl:w-full md:w-[290px] w-[90%] mx-auto">
                    <Image src="/Iphone-image.png" alt="iphone" width={500} height={500} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default PageOne
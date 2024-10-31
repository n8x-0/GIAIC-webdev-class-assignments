import Image from "next/image"

const PageTwo = () => {
    return (
        <div className="w-full">
            <div className="grid xl:grid-cols-2 xl:min-h-[80vh] min-h-screen w-full">
                <div className="flex flex-col h-full">
                    <div className="xl:p-0 p-10 flex-1 relative md:block flex justify-center items-center md:flex-row flex-col">
                        <div className="xl:w-96 xl:h-80 md:w-64 md:h-60 w-52 md:absolute xl:-left-32 bottom-0">
                            <Image src={"/pageTwoImages/PlayStation.png"} alt="PlayStation.png" width={500} height={500} className="w-full h-full md:object-fill object-cover" />
                        </div>
                        <div className="h-full w-full flex md:translate-x-[20%] justify-center items-center md:text-left text-center mt-4 md:mt-0">
                            <div className="md:w-1/2 md:pr-6">
                                <h1 className="md:text-5xl text-3xl font-medium">Playstation 5</h1>
                                <p className="text-[#909090] mt-2">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 md:flex-row flex-col">
                        <div className="xl:p-0 p-10 bg-[#EDEDE1] md:w-1/2 w-full h-full relative md:block flex justify-center items-center md:flex-row flex-col">
                            <div className="sm:w-60 sm:h-60 w-40 h-40 md:absolute -left-32 top-1/2 md:-translate-y-1/2">
                                <Image src={"/cardImages/pg3Airpods.png"} alt="pg3Airpods.png" width={500} height={500} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-full w-full flex md:translate-x-[20%] justify-center items-center md:text-left text-center mt-4 md:mt-0">
                                <div className="md:w-1/2 md:pr-6">
                                    <h1 className="md:text-4xl text-3xl font-extralight">Apple AirPods <b className="font-medium">Max</b></h1>
                                    <p className="text-[#909090] mt-2">Computational audio. Listen, it's powerful</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:p-0 p-10 bg-[#353535] text-white md:w-1/2 w-full h-full relative overflow-hidden md:block flex justify-center items-center md:flex-row flex-col">
                            <div className="sm:w-64 sm:h-40 w-56 h-34 md:absolute md:-left-32 top-1/2 md:-translate-y-1/2">
                                <Image src={"/vrHeadset.png"} alt="vrHeadset.png" width={500} height={500} className="w-full h-full object-cover" />
                            </div>
                            <div className="h-full w-full flex md:translate-x-[20%] justify-center items-center md:text-left text-center mt-4 md:mt-0">
                                <div className="md:w-1/2 md:pr-6">
                                    <h1 className="md:text-4xl text-3xl font-extralight">Apple Vision <b className="font-medium">Pro</b></h1>
                                    <p className="text-[#909090] mt-2">An immersive way to experience entertainment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#EDEDED] md:h-full relative md:block flex justify-center flex-col items-center xl:py-0 p-10 overflow-hidden">
                    <div className="sm:w-[500px] sm:h-full w-56 h-[145px] md:absolute md:-right-48 top-1/2 md:-translate-y-1/2">
                        <Image src={"/pageTwoImages/macbook.png"} alt="vrHeadset.png" width={500} height={500} className="w-full h-full md:object-left object-cover" />
                    </div>
                    <div className="md:h-full md:w-full flex justify-center items-center md:text-left text-center mt-2 md:mt-0 md:-translate-x-[20%]">
                        <div className="md:w-1/2 md:pr-6">
                            <h1 className="md:text-7xl text-3xl font-thin">Macbook <b className="font-medium">Air</b></h1>
                            <p className="text-[#909090] mt-2">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                            <button className={`md:w-fit w-full px-12 py-4 border-[1px] rounded-md mt-5 text-lg font-medium border-black`}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PageTwo
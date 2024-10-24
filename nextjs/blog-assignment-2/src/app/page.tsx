import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import { HiOutlinePlus } from "react-icons/hi";
import Slider from "@/components/slider1";

const topPicks: {category: string, text: string, image: string, id: number}[] = [
  {
    category: "Travel",
    text: "Get to your dream now destination with travel bro",
    image: "/travel1.avif",
    id: 1
  },
  {
    category: "Mens",
    text: "Discover the latest men's fashion trends and styles",
    image: "/potrait-1.webp",
    id: 4
  },
  {
    category: "Politics",
    text: "Stay updated with the latest political news and insights",
    image: "/politics.avif",
    id: 7
  }
]

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 md:flex xl:px-20 p-2 bg-[#EFF2F9]">

      <div className="xl:w-[60%] md:w-[70%] w-full flex flex-col md:justify-between md:p-8 md:pr-4 sm:p-4 p-2">
        <div className="sm:flex items-end gap-1 italic tracking-tighter sm:py-0 py-5">
          <h1 className="sm:text-7xl text-5xl font-semibold">Best of the week</h1>
          <Link href={"/articles"}>
            <span className="flex items-end gap-1 cursor-pointer text-sm pb-[2px]">see all posts <LuMoveRight /></span>
          </Link>
        </div>

        <div className="w-full md:h-[80%] sm:h-80 h-56 md:mt-0 sm:mt-10 mt-4 rounded-3xl overflow-hidden relative shadow-[#adb1b6] sm:shadow-lg shadow-md">
          <Slider arr={topPicks} />
        </div>
      </div>

      <div className="xl:w-[40%] md:w-[30%] w-full md:p-8 md:pl-4 sm:p-4 p-2 pt-0 sm:flex md:flex-col md:gap-7 sm:gap-4 items-center">

        <div className="w-full md:h-1/2 h-52 bg-[#B8D3D7] rounded-3xl md:p-6 p-3 relative scaler shadow-[#adb1b6] sm:shadow-lg shadow-md">
          <div className="flex justify-between items-center">
            <div className="font-medium sm:text-base text-sm md:px-6 md:py-2 px-3 py-1 border-[1px] border-black w-fit rounded-full">&bull; ADS</div>
            <div className="md:p-4 p-2 bg-white rounded-full w-fit">
              <HiOutlinePlus />
            </div>
          </div>
          <h2 className="font-medium leading-5 md:my-3 my-1 sm:text-xl text-sm">Become A <br /> BROADCASTMEMBER</h2>
          <h1 className="font-[450] md:text-5xl sm:text-3xl text-xl tracking-tighter md:leading-9 leading-5 my-3">Real talk in a <br /> Corporate World</h1>
          <span className="absolute bottom-0 right-0 sm:p-8 p-6 underline md:text-md text-sm font-medium cursor-pointer">Learn more</span>
        </div>

        <div className="w-full md:h-1/2 h-52 bg-black rounded-3xl overflow-hidden relative scaler flex justify-center items-end shadow-[#adb1b6] sm:shadow-lg shadow-md sm:mt-0 mt-2">
          <Image src="/potrait.png" alt="myimage" width={300} height={300} className="w-full h-full object-cover absolute top-0 left-0" />
          <div className="absolute md:px-4 md:py-3 px-2 py-1 border-[1px] border-[#242419] text-[#242419] rounded-full w-fit md:top-7 md:right-6 top-3 right-3">
            24
          </div>
          <div className="z-10 bg-white px-6 py-3 sm:mb-5 mb-3 rounded-full font-medium tracking-tight cursor-pointer md:text-xl text-xs">
            <Link href={"/articles"} className="flex items-end gap-1">
              See all picks <LuMoveRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

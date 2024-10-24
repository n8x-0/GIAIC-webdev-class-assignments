import Image from "next/image"
import { myBlogs } from "@/utils/blog-data"
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

interface BlogFace {
  id: number,
  category: string,
  text: string,
  image: string,
  blog: string
}

const BlogId = ({ params }: { params: { id: number } }) => {

  const currBlog = myBlogs.find((data: BlogFace) => data.id == params.id)
  if (currBlog)
    return (
      <div className="w-full min-h-screen lg:p-12 sm:px-6 px-3 lg:pt-24 pt-20 bg-[#EFF2F9]">
        <div className="md:w-[50%] w-full h-[450px] bg-black rounded-3xl overflow-hidden shadow-lg">
          <Image src={currBlog.image} alt={currBlog.image} width={1920} height={1080} className="w-full h-full object-cover" />
        </div>
        <div className="m-3">
          <h1 className="md:text-4xl text-2xl tracking-tighter font-medium">{currBlog?.text}</h1>
          <h3 className="md:text-base text-sm font-medium my-2">&bull; {currBlog?.category}</h3>
          <span className="font-[350] md:text-2xl text-lg tracking-tight">
            {currBlog?.blog}
          </span>
        </div>
        <div className="flex gap-3 my-6 items-center">
          <div className="md:p-4 p-3 bg-white shadow-lg rounded-xl">
            <BiSolidDislike className="w-6 h-6 text-blue-600" />
          </div>
          <div className="md:p-4 p-3 bg-white shadow-lg rounded-xl">
            <AiFillLike className="w-6 h-6 text-blue-600" />
          </div>
          <input type="text" className="md:p-4 p-3 px-8 md:w-[30%] w-1/2 rounded-2xl focus:outline-none shadow-lg" placeholder="comment..." />
          <button className="bg-blue-600 text-white md:py-4 md:px-5 px-4 py-3 rounded-xl shadow-lg text-2xl">
            <IoIosSend />
          </button>
        </div>
      </div>
    )
}

export default BlogId
import { myBlogs } from '@/utils/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import Slider2 from '@/components/slider2';

const Articles = () => {
  return (
    <div className='w-full min-h-screen bg-[#EFF2F9] pt-20'>

      <div className="categories flex justify-center items-center sm:pt-7 py-1">
        <ul className="flex sm:gap-6 gap-3 font-medium text-sm items-start justify-center italic w-fit py-4 px-10">
          <li className="hover:text-xl transition-all hover:font-bold cursor-pointer">Food</li>
          <li className="hover:text-xl transition-all hover:font-bold cursor-pointer">Technology</li>
          <li className="hover:text-xl transition-all hover:font-bold cursor-pointer">Politics</li>
          <li className="hover:text-xl transition-all hover:font-bold cursor-pointer">Mens</li>
          <li className="hover:text-xl transition-all hover:font-bold cursor-pointer">Travel</li>
        </ul>
      </div>

      <div className='w-full flex justify-center'>
        <hr className='w-1/2 border-[2px]' />
      </div>

      <div className="slides w-full py-6 sm:px-0 px-2">
        <Slider2 />
      </div>

      <div className='w-full flex justify-center'>
        <hr className='w-1/2 border-[2px]' />
      </div>

      <div className="cardsCont md:p-12 p-3 pt-10 flex flex-wrap gap-6">
        {myBlogs.map((data, index) => {
          return (
            <Link href={`articles/${data.id}`} key={index}>
              <div className='sm:w-96 h-20 w-full flex gap-2 scaler'>
                <div className='w-32 h-20 bg-black rounded-3xl overflow-hidden'>
                  <Image src={data.image} alt={data.image} width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <div className='overflow-hidden'>
                  <h1 className='font-medium leading-4 tracking-tighter mb-1'>{data.text.slice(0, 30)}...</h1>
                  <h2 className='text-xs font-medium'>&bull; {data.category}</h2>
                  <span className='text-xs text-zinc-500'>
                    {data.blog.slice(0, 30)}...
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
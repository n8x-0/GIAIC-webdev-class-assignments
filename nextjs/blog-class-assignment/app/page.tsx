"use client"
import { useEffect, useState } from "react"
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }
  

export default function Page() {
    const [blog, setBlog] = useState<Post[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://dummyjson.com/posts')
            const response = await data.json()
            
            setBlog(response.posts)
            console.log(response.posts);
            
        }
        fetchData()
    }, [])

    return (
        <div className="w-full min-h-screen bg-cyan-50 md:p-12 p-3">
            <h1 className="text-5xl tracking-tighter p-3 mb-2 text-zinc-900">My Blogger.</h1>
            <div className="flex flex-wrap gap-5 justify-center items-center">
                {
                    blog.map((item: Post, index) => {
                        return (
                            <div className="w-80 h-80 bg-zinc-200 text-zinc-950 rounded-lg p-3 tracking-tighter shadow-lg card" key={index}>
                                <div className="w-full h-1/2 bg-black rounded-lg overflow-hidden">
                                    {/* <img src={item.image + `?random=${index}`} alt="" className="w-full h-full object-cover" /> */}
                                </div>
                                <div className="leading-4 mt-2">
                                    <h1 className="text-2xl font-bold text-nowrap overflow-hidden relative">{item.title}
                                        <span className="w-14 h-full bg-gradient-to-l from-zinc-100 to-transparent absolute bottom-0 right-0"></span>
                                    </h1>
                                    <div className="flex items-center gap-1 mb-2">
                                        <div className="w-5 h-5 bg-black rounded-full overflow-hidden">
                                            {/* <img src={item.avatar+`?random=${index}`} alt="" className="w-full h-full object-cover"/> */}
                                        </div>
                                        <h2 className="text-sm font-medium">Author's name</h2>
                                    </div>
                                    <p className="h-14 overflow-hidden relative font-extralight">{item.body}
                                        <span className="w-full h-12 bg-gradient-to-t from-zinc-200 to-transparent absolute bottom-0 left-0"></span>
                                    </p>
                                    <Link href={`/productdetails/${item.id}`}><span className="underline cursor-pointer text-blue-500">read more...</span></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
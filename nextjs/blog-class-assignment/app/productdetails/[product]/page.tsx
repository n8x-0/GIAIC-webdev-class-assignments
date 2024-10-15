"use client"
import { useEffect, useState } from "react"

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

const ProductDetails = (params: {params: { product: number }}) => {
    const [post, setPost] = useState<Post>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://dummyjson.com/posts/${params.params.product}`)
            const response = await data.json()

            setPost(response)
        }
        fetchData()
    }, [])

    if (!post) return "Loading..."

    return (
        <div className="w-full h-screenw-full min-h-screen bg-cyan-50 md:p-12 p-3 text-zinc-950">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-xl font-extralight leading-5 mt-4">{post.body}</p>
        </div>
    )
}

export default ProductDetails
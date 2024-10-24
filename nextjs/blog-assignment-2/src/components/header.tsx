"use client"

import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [active, setActive] = useState(false)
    return (
        <div className="w-full flex justify-between items-center md:px-14 sm:px-8 px-4 md:py-5 py-3 tracking-tighter absolute top-0 bg-white moveDown">
            <div className="flex items-end gap-12">
                <h1 className="font-bold sm:text-4xl text-[1.8rem] italic">Blog Spot.</h1>
                <ul className="md:flex hidden gap-8 items-center text-[15px] p-1">
                    <Link href={"/articles"}><li>Articles</li></Link>
                    <Link href={"/"}><li>Home</li></Link>
                    <li>Be a writer</li>
                    <li>Talk to us</li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <div className="p-3 rounded-full bg-black sm:flex hidden">
                    <IoSearch className="text-white text-2xl" />
                </div>
                <div className="sm:py-2 sm:px-6 px-4 py-1 rounded-full border-[1px] border-black cursor-pointer text-lg" onClick={() => active ? setActive(false) : setActive(true)}>Menu</div>
                {
                    active &&
                    <ul className="flex flex-col sm:hidden gap-2 items-center text-sm fixed top-20 right-0 bg-black text-white z-50 py-6 px-12 rounded-l-xl">
                        <Link href={"/articles"}><li>Articles</li></Link>
                        <Link href={"/"}><li>Home</li></Link>
                        <li>Be a writer</li>
                        <li>Talk to us</li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Header
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center py-5 px-4 absolute top-0 bg-white">
      <div className="md:w-fit w-full flex md:justify-center justify-between items-center gap-16">
        <div className="w-16">
          <Image src="Logo.svg" alt="logo" width={60} height={50} className="w-full h-full object-cover" />
        </div>
        <input type="text" className="w-[372px] px-6 py-3 rounded-lg bg-[#F5F5F5] text-[#656565] focus:outline-none placeholder:text-[#989898] placeholder:text-sm xl:block hidden" placeholder="Search" />
        <div className="md:flex hidden gap-12 text-sm font-medium text-[#989898]">
          <Link href="/" className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4">Home</Link>
          <Link href="/" className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4">About</Link>
          <Link href="/" className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4">Contact Us</Link>
          <Link href="/" className="hover:text-black hover:underline hover:font-semibold decoration-2 underline-offset-4">Blog</Link>
        </div>
        <div className="md:flex hidden gap-5">
          <div className="w-8 h-8">
            <Image src="Favorites.svg" alt="logo" width={60} height={60} className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8">
            <Image src="Cart.svg" alt="logo" width={60} height={60} className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8">
            <Image src="User.svg" alt="logo" width={60} height={60} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="md:hidden block w-10 h-10">
          <Image src="/list.png" alt="logo" width={60} height={60} className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default Header
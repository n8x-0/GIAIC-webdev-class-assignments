import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full sm:px-8 sm:py-6 px-4 py-3 mb-2 bg-[#496EFC] text-white flex justify-between items-center">
        <h1 className="text-3xl font-bold">n8x</h1>
        <div className="flex items-center sm:gap-10 gap-3">
            <div>home</div>
            <Link href={'https://www.linkedin.com/in/syed-shayan-3a48202b3/'}>Linkedin</Link>
            <div>privacy policy</div>
        </div>
    </div>
  )
}

export default Header
import Link from "next/link"

const header = () => {
  return (
    <div className="w-full p-4 bg-zinc-600 text-white flex justify-between items-center anim">
        <h1 className="font-semibold text-2xl">n8x.</h1>
        <div className="flex gap-6">
            <Link href='/'><div>Home</div></Link>
        </div>
    </div>
  )
}

export default header
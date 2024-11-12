import Link from "next/link"

const Loader = ({ type }: { type: string }) => {
    return (
        <div className="w-full h-screen absolute top-0 left-0 bg-black/80 flex flex-col justify-center items-center">
            {type === "loading" ?
                <div className="w-20 h-20 border-2 border-white border-t-[#c3c3c3] rounded-full animate-spin"></div>
                :
                <>
                    <div className="text-xl text-red-500 lg:w-1/2 w-full p-4 font-medium">{type}</div>
                    <Link href="/" className="text-xl bg-black text-red-400 font-medium px-4 py-2 rounded-lg" onClick={() => window.location.reload()}>Relaod</Link>
                </>
            }
        </div>
    )
}

export default Loader
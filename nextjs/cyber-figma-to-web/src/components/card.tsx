import Image from "next/image"

const Card = ({ arr }: { arr: {image: string, title: string, price: string}[] }) => {
    return (
        arr.map((data, index) => {
            return (
                <div key={index} className="md:w-72 sm:w-60 w-52 bg-[#F6F6F6] rounded-lg p-5 flex flex-col justify-center items-center gap-3">
                    <div className="w-full flex justify-end">
                        <Image src="Favorites.svg" alt="favs" width={32} height={32} />
                    </div>
                    <div className="md:w-40 md:h-40 w-32 h-32">
                        <Image src={data.image} alt="favs" width={500} height={500} className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-center md:text-base text-sm font-medium leading-4">{data.title}</h1>
                    <span className="text-2xl font-semibold">{data.price}</span>
                    <button className="px-12 py-3 bg-black text-white rounded-md text-sm">Buy Now</button>
                </div>
            )
        })
    )
}

export default Card
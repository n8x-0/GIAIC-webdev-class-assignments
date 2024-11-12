"use client";
import Image from "next/image";
import { fetchData, fetchPrice } from "@/utils/fetchData"
import { useEffect, useState } from "react";
import Loader from "@/components/loader";


export default function Home() {

  const [data, setData] = useState<any>();
  const [rates, setRates] = useState<any>();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const dataInitializer = async () => {
      const fetchCryptoData = await fetchData()
      const fetchRatesData = await fetchPrice()
      setData(fetchCryptoData);
      setRates(fetchRatesData);
    }
    dataInitializer()
  }, [])

  if (!data && !rates) return <Loader type={"loading"} />;
  if (!data.success) {
    return <Loader type={data.error.info} />;
  }

  const keys = Object.keys(data.crypto)
  const filteredItems = keys.filter((items) => items.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="w-full min-h-[90vh] flex justify-center" >
      <div className="xl:w-3/4 w-full p-4">
        <input type="text" className="lg:w-1/2 w-full bg-[#EDEDED] p-4 rounded-lg focus:outline-none md:m-5" placeholder="Search coin eg: BTC ABC" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="flex justify-between items-center gap-3 py-3 md:px-8 px-0 border-b-[1px] border-[#e0e0e0] md:text-base text-sm">
          <div className="flex items-center md:gap-5 gap-2">
            <span className="text-zinc-500 text-base font-medium">&bull;</span>
            <h2 className="md:ml-16 sm:ml-12 ml-10 font-semibold md:w-fit w-20 text-wrap">name</h2>
            <span className="text-zinc-500 font-semibold">symbol</span>
          </div>

          <div className="flex md:gap-10 gap-2 font-medium">
            <span className="md:w-32 text-right">Price</span>
            <span className="md:w-32 text-right">M.supply</span>
          </div>
        </div>
        {
          filteredItems.map((key, index: number) => {
            const { symbol, name, max_supply, icon_url } = data.crypto[key];
            const price = rates.rates[symbol];

            return (
              <div key={index} className="flex justify-between items-center gap-3 py-3 md:px-8 px-0 border-b-[1px] border-[#e0e0e0] overflow-hidden">
                <div className="flex items-center md:gap-5 gap-2 sm:text-base text-sm">
                  <span className="text-zinc-500 sm:text-base text-xs font-medium">{index + 1}</span>
                  <div className="md:w-12 md:h-12 w-8 h-8 rounded-full overflow-hidden">
                    <Image src={icon_url} alt={icon_url} width={200} height={200} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="font-semibold md:w-fit w-20 text-wrap">{name}</h2>
                  <span className="text-zinc-500 font-semibold">{symbol}</span>
                </div>

                <div className="flex md:gap-10 gap-2 sm:text-base text-xs">
                  <span className="font-medium text-green-950 md:w-32 text-right">{'$' + price.toString().slice(0, 5)}</span>
                  <span className="font-medium md:w-32 text-right">{max_supply}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}

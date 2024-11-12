"use server";

export const fetchData = async (query?: string) => {
    const response = await fetch(`http://api.coinlayer.com/list?access_key=${process.env.API_KEY}`)
    const data = await response.json();
    return data
}

export const fetchPrice = async () => {
    const fetchrates = await fetch(`http://api.coinlayer.com/live?access_key=${process.env.API_KEY}`)
    const rates = await fetchrates.json()
    return rates
}
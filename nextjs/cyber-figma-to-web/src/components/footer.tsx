const Footer = () => {
    return (
        <div className="flex justify-center bg-black text-white">
            <div className="flex w-full lg:p-20 p-10 lg:flex-row flex-col lg:text-left text-center lg:gap-0 gap-10 items-center">
                <div className="lg:w-[40%]">
                    <h1 className="text-4xl font-bold lg:w-fit w-full">cyber</h1>
                    <p className="mt-4 text-lg w-96 text-gray-400">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    <div className="flex space-x-4 mt-6">
                        <i className="fab fa-twitter text-2xl"></i>
                        <i className="fab fa-facebook text-2xl"></i>
                        <i className="fab fa-tiktok text-2xl"></i>
                        <i className="fab fa-instagram text-2xl"></i>
                    </div>
                </div>
                <div className="lg:w-[30%]">
                    <h2 className="text-xl font-semibold">Services</h2>
                    <ul className="mt-4 space-y-2 text-sm flex flex-col gap-4 text-gray-400">
                        <li>Bonus program</li>
                        <li>Gift cards</li>
                        <li>Credit and payment</li>
                        <li>Service contracts</li>
                        <li>Non-cash account</li>
                        <li>Payment</li>
                    </ul>
                </div>
                <div className="lg:w-[30%]">
                    <h2 className="text-xl font-semibold">Assistance to the buyer</h2>
                    <ul className="mt-4 space-y-2 text-sm flex flex-col gap-4 text-gray-400">
                        <li>Find an order</li>
                        <li>Terms of delivery</li>
                        <li>Exchange and return of goods</li>
                        <li>Guarantee</li>
                        <li>Frequently asked questions</li>
                        <li>Terms of use of the site</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
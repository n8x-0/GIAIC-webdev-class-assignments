import BrowseCategorySec from "@/components/home/browseCategorySec";
import PageFour from "@/components/home/pageFour";
import PageOne from "@/components/home/pageOne";
import PageThree from "@/components/home/pageThree";
import PageTwo from "@/components/home/pageTwo";
import ShopNowCards from "@/components/home/shopNowCards";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <PageOne />
      <PageTwo />
      <BrowseCategorySec />
      <PageThree />
      <ShopNowCards />
      <PageFour />
    </div>
  );
}

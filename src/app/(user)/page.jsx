import GroceryPage from "@/components/Footer";
import Banner from "@/components/home/Banner";
import HomeProducts from "@/components/home/HomeProducts";
import MobileSideBar from "@/components/MobileSideBar";



export default async function Home() {

  return (
    <div>
      {/* <MobileSideBar /> */}
      <Banner />
      <HomeProducts />
      <GroceryPage />
    </div>
  );
}

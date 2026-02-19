import ProductControls from "@/components/(shop)/ProductControls"
import ProductsList from "@/components/(shop)/ProductsList"
import ShopBanner from "@/components/(shop)/ShopBanner"

const ShopPage = () => {
  return (
    <>
      <ShopBanner/>
      <ProductControls/>
      <ProductsList/>
    </>
  )
}

export default ShopPage
import AddToCart from "@/components/(product-details)/AddToCart"
import ProductDetails from "@/components/(product-details)/ProductDetails"
import ProductPath from "@/components/(product-details)/ProductPath"
import RelatedProducts from "@/components/(product-details)/RelatedProducts"
import SubBanner from "@/components/SubBanner"

const ProductDetailsPage = () => {
  return (
    <>
      <SubBanner>
        <ProductPath/>
      </SubBanner>
      <AddToCart/>
      <ProductDetails/>
      <RelatedProducts/>
    </>
  )
}

export default ProductDetailsPage
import { StaticImageData } from "next/image";
import GreenApple from '@/assets/images/green-apple.webp'
import Malta from '@/assets/images/malta.webp'
import Cabbage from '@/assets/images/cabbage.webp'
import Lettuce from '@/assets/images/green-lettuce.webp'
import Eggplant from '@/assets/images/eggplant.webp'
import Potatoes from '@/assets/images/potatoes.webp'
import Corn from '@/assets/images/corn.webp'
import CauliFlower from '@/assets/images/cauliflower.webp'
import Capsicum from '@/assets/images/capsicum.webp'
import GreenChili from '@/assets/images/green-chili.webp'
import RedCapcicum from '@/assets/images/red-chili-sm.webp'
import Tomatoes from '@/assets/images/tomatos.webp'
import Mangoes from '@/assets/images/mango.webp'
import LediesFilnger from '@/assets/images/ladies-finger.webp'
import RedChili from '@/assets/images/red-chili-big.webp'
import Cucumber from '@/assets/images/cucumber.webp'
// ================================================

import ServiceImage1 from '@/assets/images/delivery.png'
import ServiceImage2 from '@/assets/images/headphone.png'
import ServiceImage3 from '@/assets/images/shopping-bag.png'
import ServiceImage4 from '@/assets/images/package.png'
// ================================================

import img1 from '@/assets/images/catagories-images/image1.webp'
import img2 from '@/assets/images/catagories-images/image2.webp'
import img3 from '@/assets/images/catagories-images/image3.webp'
import img4 from '@/assets/images/catagories-images/image4.webp'
import img5 from '@/assets/images/catagories-images/image5.webp'
import img6 from '@/assets/images/catagories-images/image6.webp'
import img7 from '@/assets/images/catagories-images/image7.webp'
import img8 from '@/assets/images/catagories-images/image8.webp'
import img9 from '@/assets/images/catagories-images/image9.webp'
import img10 from '@/assets/images/catagories-images/image10.webp'
import img11 from '@/assets/images/catagories-images/image11.webp'
import img12 from '@/assets/images/catagories-images/image12.webp'
// ============================================

import FiveStarRating from '@/assets/images/five-star.png'
import FourStarRating from '@/assets/images/Rating.png'
import KristanWatson from '@/assets/images/kristan-watson.png'
import JaneCooper from '@/assets/images/jane-cooper.png'
import JacobJones from '@/assets/images/jacob-jones.png'
import RalphEdwords from '@/assets/images/ralph-edwards.png'
// ===========================================================

import Leaf from '@/assets/images/leaf.png'
import Headphone from '@/assets/images/headphone.png'
import ShoppingBag from '@/assets/images/shopping-bag.png'
import Delivery from '@/assets/images/delivery.png'
import Package from '@/assets/images/package.png'
import Star from '@/assets/images/star.png'
// ============================================================

import GalleryImg1 from '@/assets/images/gallery-images/gallery-img1.webp'
import GalleryImg2 from '@/assets/images/gallery-images/gallery-img2.webp'
import GalleryImg3 from '@/assets/images/gallery-images/gallery-img3.webp'
import GalleryImg4 from '@/assets/images/gallery-images/gallery-img4.webp'
import GalleryImg5 from '@/assets/images/gallery-images/gallery-img5.webp'
import GalleryImg6 from '@/assets/images/gallery-images/gallery-img6.webp'
import GalleryImg7 from '@/assets/images/gallery-images/gallery-img7.webp'
import GalleryImg8 from '@/assets/images/gallery-images/gallery-img8.webp'
// ============================================================

import RecentlyBlogImg1 from '@/assets/images/recently-added-img1.webp'
import RecentlyBlogImg2 from '@/assets/images/recently-added-img2.webp'
import RecentlyBlogImg3 from '@/assets/images/recently-added-img3.webp'
// ============================================================

import BlogImg1 from '@/assets/images/blogs-images/blog-img1.webp'
import BlogImg2 from '@/assets/images/blogs-images/blog-img2.webp'
import BlogImg3 from '@/assets/images/blogs-images/blog-img3.webp'
import BlogImg4 from '@/assets/images/blogs-images/blog-img4.webp'
import BlogImg5 from '@/assets/images/blogs-images/blog-img5.webp'
import BlogImg6 from '@/assets/images/blogs-images/blog-img6.webp'
import BlogImg7 from '@/assets/images/blogs-images/blog-img7.webp'
import BlogImg8 from '@/assets/images/blogs-images/blog-img8.webp'
import BlogImg9 from '@/assets/images/blogs-images/blog-img9.webp'
import BlogImg10 from '@/assets/images/blogs-images/blog-img10.webp'

interface ProductType {
    imgSrc: StaticImageData,
    alt: string,
    name: string,
    price: number,
    oldPrice?: number,
    discount: boolean,
}

export const PopulerProducts: ProductType[] = [
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: Malta,
        alt: 'Fresh Malta',
        name: 'Fresh Indian Malta',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Cabbage,
        alt: 'Chinese cabbage',
        name: 'Chinese cabbage',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Lettuce,
        alt: 'Green Lettuce',
        name: 'Green Lettuce',
        price: 9.00,
        discount: false,
    },
    {
        imgSrc: Eggplant,
        alt: 'Eggplant',
        name: 'Eggplant',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: Potatoes,
        alt: 'Big Potatoes',
        name: 'Big Potatoes',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Corn,
        alt: 'Corn',
        name: 'Corn',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: CauliFlower,
        alt: 'Fresh Cauliflower',
        name: 'Fresh Cauliflower',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Capsicum,
        alt: 'Green Capsicum',
        name: 'Green Capsicum',
        price: 9.00,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: GreenChili,
        alt: 'Green Chili',
        name: 'Green Chili',
        price: 34.00,
        discount: false,
    },
]

export const HotDeals: ProductType[] = [
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: Mangoes,
        alt: 'Mangoes',
        name: 'Surjapur Mango',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: Malta,
        alt: 'Fresh Malta',
        name: 'Fresh Indian Malta',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Cabbage,
        alt: 'Chinese cabbage',
        name: 'Chinese cabbage',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Lettuce,
        alt: 'Green Lettuce',
        name: 'Green Lettuce',
        price: 9.00,
        discount: false,
    },
    {
        imgSrc: Eggplant,
        alt: 'Eggplant',
        name: 'Eggplant',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: RedChili,
        alt: 'Red Chili',
        name: 'Red Chili',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Potatoes,
        alt: 'Big Potatoes',
        name: 'Big Potatoes',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Tomatoes,
        alt: 'Red Tomatos',
        name: 'Red Tomatos',
        price: 9.00,
        oldPrice: 20.99,
        discount: true
    },
    {
        imgSrc: Corn,
        alt: 'Corn',
        name: 'Corn',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: CauliFlower,
        alt: 'Fresh Cauliflower',
        name: 'Fresh Cauliflower',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Capsicum,
        alt: 'Green Capsicum',
        name: 'Green Capsicum',
        price: 9.00,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: GreenChili,
        alt: 'Green Chili',
        name: 'Green Chili',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: Eggplant,
        alt: 'Eggplant',
        name: 'Eggplant',
        price: 34.00,
        discount: false,
    },
]


interface CatagoriesDataType {
    imgSrc: StaticImageData,
    alt: string
    name: string,
}

export const CatagoriesData: CatagoriesDataType[] = [
    {
        imgSrc: img1,
        alt: 'Fruit',
        name: 'Fresh Fruit',
    },
    {
        imgSrc: img2,
        alt: 'Vegetables',
        name: 'Fresh Vegetables',
    },
    {
        imgSrc: img3,
        alt: 'Meat & Fish',
        name: 'Meat & Fish',
    },
    {
        imgSrc: img4,
        alt: 'Snacks',
        name: 'Snacks',
    },
    {
        imgSrc: img5,
        alt: 'Beverages',
        name: 'Beverages',
    },
    {
        imgSrc: img6,
        alt: 'Beauty & Health',
        name: 'Beauty & Health',
    },
    {
        imgSrc: img7,
        alt: 'Bread & Bakery',
        name: 'Bread & Bakery',
    },
    {
        imgSrc: img8,
        alt: 'Baking Needs',
        name: 'Baking Needs',
    },
    {
        imgSrc: img9,
        alt: 'Cooking',
        name: 'Cooking',
    },
    {
        imgSrc: img10,
        alt: 'Diabetic Food',
        name: 'Diabetic Food',
    },
    {
        imgSrc: img11,
        alt: 'Dish Detergents',
        name: 'Dish Detergents',
    },
    {
        imgSrc: img12,
        alt: 'Oil',
        name: 'Oil',
    },
]

export const FeaturedProducts: ProductType[] = [
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: Malta,
        alt: 'Fresh Malta',
        name: 'Fresh Indian Malta',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Cabbage,
        alt: 'Chinese cabbage',
        name: 'Chinese cabbage',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Lettuce,
        alt: 'Green Lettuce',
        name: 'Green Lettuce',
        price: 9.00,
        discount: false,
    },
    {
        imgSrc: Eggplant,
        alt: 'Eggplant',
        name: 'Eggplant',
        price: 34.00,
        discount: false,
    },
]


// ========================================================
// Service data
interface ServiceDataType {
    imgSrc: StaticImageData,
    alt: string
    title: string,
    description: string
}

export const ServiceData: ServiceDataType[] = [
    {
        imgSrc: ServiceImage1,
        alt: 'Shipping',
        title: 'Free Shipping',
        description: 'Free shipping on all your order'
    },
    {
        imgSrc: ServiceImage2,
        alt: 'Support',
        title: 'Customer Support 24/7',
        description: 'Instant access to Support'
    },
    {
        imgSrc: ServiceImage3,
        alt: 'Payment',
        title: '100% Secure Payment',
        description: 'We ensure your money is save'
    },
    {
        imgSrc: ServiceImage4,
        alt: 'Guarantee',
        title: 'Money-Back Guarantee',
        description: '30 Days Money-Back Guarantee'
    },
]
// ========================================================


export const CategoryOptions: string[] = [
            'Fresh Fruit',
            'Fresh Vegetables',
            'Meat & Fish',
            'Snacks',
            'Beverages',
            'Beauty & Health',
            'Oil',
            'Bread & Bakery',
            'Baking Needs',
            'Cooking',
            'Diabetic Food',
            'Dish Detergents',
]
export const PriceOptions: string[] = [
            '$10 to $50',
            '$50 to $100',
            '$100 to $200',
            '$200 to $300',
            '$300 to $500',
            '$500 to $1000',
]
export const RatingOptions: string[] = [
            '5 Stars Only',
            '4 Stars & Up',
            '3 Stars & Up',
            '2 Stars & Up',
            '1 Star & Up',
]
export const SortOptions: string[] = [
            'Latest',
            'Low to High',
            'High to Low',
            'Popularity',
            'Average Rating',
]
export const ShowOptions: number[] = [8 , 16, 24 ,32]


// ========================================================

export const ShopProducts:ProductType[] = [
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: Mangoes,
        alt: 'Mangoes',
        name: 'Surjapur Mango',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: Malta,
        alt: 'Fresh Malta',
        name: 'Fresh Indian Malta',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Cabbage,
        alt: 'Chinese cabbage',
        name: 'Chinese cabbage',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Lettuce,
        alt: 'Green Lettuce',
        name: 'Green Lettuce',
        price: 9.00,
        discount: false,
    },
    {
        imgSrc: Eggplant,
        alt: 'Eggplant',
        name: 'Eggplant',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: RedCapcicum,
        alt: 'RedCapcicum',
        name: 'Red Capcicum',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: RedChili,
        alt: 'RedChili',
        name: 'Red Chili',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Potatoes,
        alt: 'Big Potatoes',
        name: 'Big Potatoes',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: Tomatoes,
        alt: 'Red Tomatos',
        name: 'Red Tomatos',
        price: 9.00,
        oldPrice: 20.99,
        discount: true
    },
    {
        imgSrc: Corn,
        alt: 'Corn',
        name: 'Corn',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: CauliFlower,
        alt: 'Fresh Cauliflower',
        name: 'Fresh Cauliflower',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Capsicum,
        alt: 'Green Capsicum',
        name: 'Green Capsicum',
        price: 9.00,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: GreenChili,
        alt: 'Green Chili',
        name: 'Green Chili',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: Eggplant,
        alt: 'Eggplant',
        name: 'Eggplant',
        price: 34.00,
        discount: false,
    },
    {
        imgSrc: RedChili,
        alt: 'RedChili',
        name: 'Red Chili',
        price: 20.00,
        discount: false,
    },
    {
        imgSrc: LediesFilnger,
        alt: 'Ladies Finger',
        name: 'Ladies Finger',
        price: 14.99,
        discount: false,
    },
    {
        imgSrc: Cucumber,
        alt: 'Green Cucumber',
        name: 'Green Cucumber',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: CauliFlower,
        alt: 'Fresh Cauliflower',
        name: 'Fresh Cauliflower',
        price: 12.00,
        discount: false,
    },
]

interface FeedbackTypes {
  imageUrl: StaticImageData,
  alt: string,
  name: string,
  date: string,
  rating: StaticImageData,
  description: string
}

export const FeedbackData:FeedbackTypes[] = [
  {
    imageUrl: KristanWatson,
    alt: 'Kristan Watson',
    name: 'Kristan Watson',
    date: '2 min ago',
    rating: FiveStarRating,
    description:`Duis at ullamcorper nulla, eu dictum eros.`
  },
  {
    imageUrl: JaneCooper,
    alt: 'Jane Cooper',
    name: 'Jane Cooper',
    date: '30 Apr, 2025',
    rating: FourStarRating,
    description: `Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.`
  },
  {
    imageUrl: JacobJones,
    alt: 'Jacob Jones',
    name: 'Jacob Jones',
    date: '2 min ago',
    rating: FiveStarRating,
    description: `Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.`
  },
  {
    imageUrl: RalphEdwords,
    alt: 'Ralph Edwards',
    name: 'Ralph Edwards',
    date: '2 min ago',
    rating: FiveStarRating,
    description: `200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA`
  },
]

export const RelatedProductsData:ProductType[] = [
    {
        imgSrc: GreenApple,
        alt: 'Green Apple',
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: CauliFlower,
        alt: 'Fresh Cauliflower',
        name: 'Fresh Cauliflower',
        price: 12.00,
        discount: false,
    },
    {
        imgSrc: Capsicum,
        alt: 'Green Capsicum',
        name: 'Green Capsicum',
        price: 9.00,
        oldPrice: 20.99,
        discount: true,
    },
    {
        imgSrc: LediesFilnger,
        alt: 'Ladies Finger',
        name: 'Ladies Finger',
        price: 14.99,
        discount: false,
    },
]

// ================================================

// For About us page 

interface FeatureItemType {
    image: StaticImageData,
    alt: string,
    title: string,
    paragraph: string
}

export const FeatureItemData: FeatureItemType[] = [
  {
    image: Leaf,
    alt: 'leaf image' ,
    title: '100% Organic food',
    paragraph: '100% healthy & Fresh food.',
  },
  {
    image: Headphone ,
    alt: 'headphone image',
    title: 'Great Support 24/7',
    paragraph: 'Instant access to Contact',
  },
  {
    image: Star,
    alt: 'star image',
    title: 'Customer Feedback',
    paragraph: 'Our happy customer',
  },
  {
    image: ShoppingBag,
    alt: 'Shopping Bag image' ,
    title: '100% Sucure Payment',
    paragraph: 'We ensure your money is save',
  },
  {
    image: Delivery ,
    alt: 'delivery image',
    title: 'Free Shipping',
    paragraph: 'Free shipping with discount',
  },
  {
    image: Package,
    alt: 'package image',
    title: '100% Organic Food',
    paragraph: '100% healthy & Fresh food.',
  }
]

// For Blog list page 

interface TopCatagoriesType {
    catagoryItem: string,
    avaiable: number
}

export const TopCatagoriesData: TopCatagoriesType[] = [
    {
        catagoryItem: 'Fresh Fruit',
        avaiable: 134
    },
    {
        catagoryItem: 'Vegetables',
        avaiable: 150
    },
    {
        catagoryItem: 'Cooking',
        avaiable: 54
    },
    {
        catagoryItem: 'Snacks',
        avaiable: 47
    },
    {
        catagoryItem: 'Beverages',
        avaiable: 43
    },
    {
        catagoryItem: 'Beauty & Health',
        avaiable: 38
    },
    {
        catagoryItem: 'Bread & Bakery',
        avaiable: 15
    },
]

export const PopulerTagsData: string[] = ['Healthy','Low fat','Vegetarian','Bread','Kid foods','Vitamins','Snacks','Tiffin','Meat','Launch','Dinner']

interface OurGalleryType {
    imgSrc: StaticImageData,
    alt: string
}

export const OurGalleryData: OurGalleryType[] = [
    {
        imgSrc: GalleryImg1,
        alt: 'gallery image 1'
    },
    {
        imgSrc: GalleryImg2,
        alt: 'gallery image 2'
    },
    {
        imgSrc: GalleryImg3,
        alt: 'gallery image 3'
    },
    {
        imgSrc: GalleryImg4,
        alt: 'gallery image 4'
    },
    {
        imgSrc: GalleryImg5,
        alt: 'gallery image 5'
    },
    {
        imgSrc: GalleryImg6,
        alt: 'gallery image 6'
    },
    {
        imgSrc: GalleryImg7,
        alt: 'gallery image 7'
    },
    {
        imgSrc: GalleryImg8,
        alt: 'gallery image 8'
    },
]

interface RecentlyAddedBlogType extends OurGalleryType{
        title: string
}

export const RecentlyAddedBlogData: RecentlyAddedBlogType[] = [
    {
        imgSrc: RecentlyBlogImg1,
        alt: "Recent blog image 1",
        title: 'Curabitur porttitor orci eget nequ accumsan.'
    },
    {
        imgSrc: RecentlyBlogImg2,
        alt: "Recent blog image 2",
        title: 'Donec mattis arcu faucibus suscipit viverra.'
    },
    {
        imgSrc: RecentlyBlogImg3,
        alt: "Recent blog image 3",
        title: 'Quisque posuere tempus rutrum. Integer velit ex.'
    },
]

interface BlogImagesType {
    imgSrc: StaticImageData,
    alt: string
}

export const BlogImagesData: BlogImagesType[] = [
    {
        imgSrc: BlogImg1,
        alt: 'blog 1'
    },
    {
        imgSrc: BlogImg2,
        alt: 'blog 2'
    },
    {
        imgSrc: BlogImg3,
        alt: 'blog 3'
    },
    {
        imgSrc: BlogImg4,
        alt: 'blog 4'
    },
    {
        imgSrc: BlogImg5,
        alt: 'blog 5'
    },
    {
        imgSrc: BlogImg6,
        alt: 'blog 6'
    },
    {
        imgSrc: BlogImg7,
        alt: 'blog 7'
    },
    {
        imgSrc: BlogImg8,
        alt: 'blog 8'
    },
    {
        imgSrc: BlogImg9,
        alt: 'blog 9'
    },
    {
        imgSrc: BlogImg10,
        alt: 'blog 10'
    }
]
import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/images/Logo2.png'
import ApplePlay from '@/assets/images/ApplePay.svg'
import Visa from '@/assets/images/Visa.svg'
import Discover from '@/assets/images/Discover.svg'
import Mastercart from '@/assets/images/Mastercard.svg'
import Cart from '@/assets/images/Cart.svg'

interface FooterItems {
  title: string,
  navLinks: string[]
}

const FooterData: FooterItems[] = [
  {
    title: 'My Account',
    navLinks: ['My Account','Order History','Shoping Cart','Wishlist']
  },
  {
    title: 'Helps',
    navLinks: ['Contact','Faqs','Terms & Condition','Privacy Policy']
  },
  {
    title: 'Proxy',
    navLinks: ['About','Shop','Product','Track Order']
  },
  {
    title: 'Categories',
    navLinks: ['Fruit & Vegetables','Meat & Fish','Bread & Bakery','Beauty & Health']
  },
]

const FooterBottom = () => {
  return (
    <section className=' bg-dark'>
      <div className="container py-15 flex">
        <div className=' max-w-75'>
          <Image src={logo} alt="logo" />
          <p className=' my-4 font-poppins font-normal text-[14px] leading-[150%] text-light-gray'>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>

          <div>
            <Link href={'tel:2195550114'} className='font-poppins text-white font-medium text-[14px] leading-[150%] relative before:absolute before:w-full before:h-[1.5px] before:bg-primary before:-bottom-1.5'>
              (219) 555-0114
            </Link>

            <span className='mx-4 font-poppins font-normal text-base leading-[150%] text-light-gray'>Or</span>

            <Link href={'mailto:Proxy@gmail.com'} className='font-poppins text-white font-medium text-[14px] leading-[150%] relative before:absolute before:w-full before:h-[1.5px] before:bg-primary before:-bottom-1.5'>
              Proxy@gmail.com
            </Link>
          </div>
        </div>

        <div className=' flex ml-37'>
          {
            FooterData.map((item, index) => (
            <div key={index} className={`${index === 1 && 'ml-32.5'} ${index === 2 && 'ml-[135px]'} ${index === 3 && 'ml-[140px]'}`}>
              <h4 className=' font-medium font-poppins text-base leading-[150%] text-white mb-5'>
                {item.title}
              </h4>

              <ul className=' flex flex-col gap-3'>
                {item.navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={'#'} className='font-poppins font-normal text-[14px] leading-[150%] text-secondary'>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
          }
        </div>
      </div>

      <div className=' container flex items-center justify-between py-6 border-t border-dark-primary'>
          <p className='font-poppins text-[14px] font-normal leading-[150%] text-light-gray'>
            Ecobazar eCommerce © 2026. All Rights Reserved
          </p>

          <div className=' flex items-center gap-x-2 [&>img]:cursor-pointer'>
            <Image src={ApplePlay} alt="Apple play" />
            <Image src={Visa} alt="Visa" />
            <Image src={Discover} alt="Discover" />
            <Image src={Mastercart} alt="Mastercart" />
            <Image src={Cart} alt="Cart" />
          </div>
      </div>
    </section>
  )
}

export default FooterBottom
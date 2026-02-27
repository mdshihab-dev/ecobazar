"use client"
import PhoneIcon from "@/assets/icons/PhoneIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavType {
  navRoute: string,
  navName: string,
}

  const navLinks: NavType[] = [
    {
      navRoute: "/",
      navName: "Home",
    },
    {
      navRoute: "/shop",
      navName: "Shop",
    },
    {
      navRoute: "/pages",
      navName: "Pages",
    },
    {
      navRoute: "/blogs",
      navName: "Blog",
    },
    {
      navRoute: "/about",
      navName: "About Us",
    },
    {
      navRoute: "/contact",
      navName: "Contact Us",
    }
  ]


const HeaderBottom = () => {
  const path = usePathname()
  return (
    <section className={`${path === '/' || path === '/shop' ? ' bg-dark-primary' : 'bg-white border-t border-[#e6e6e6]'} py-4`}>
      <div className=" container flex justify-between">

        <ul className=" flex items-center gap-x-8">
          {
            navLinks.map((item, index) => (
              <li key={index} className=" group flex items-center gap-x-1">
                <Link href={item.navRoute} className={`inline-block ${path === '/' || path === '/shop' ? 'text-secondary group-hover:text-white' : ' text-text group-hover:text-primary'}  font-poppins text-[14px] transition-all font-medium `}>
                  {item.navName}
                </Link>
              </li>
            ))
          }
        </ul>

        <Link href="tel:2195550114" className=" flex items-center justify-center gap-x-2 cursor-pointer">
          <PhoneIcon/>
          <span className=" text-white font-poppins font-medium text-[14px] leading-[150%]">(219) 555-0114</span>
        </Link>
      </div>
    </section>
  )
}

export default HeaderBottom
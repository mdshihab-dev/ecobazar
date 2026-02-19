import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import PinterestIcon from "@/assets/icons/PinterestIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import Link from "next/link";

type IconType = React.ReactNode;
const icons: IconType[] = [
  <FacebookIcon key="facebook" />,
  <TwitterIcon key="twitter" />,
  <PinterestIcon key="pinterest" />,
  <InstagramIcon key="instagram" />,
];

const SocialMedia = () => {
  return (
    <div className=" py-6 pl-6 flex items-center gap-2.5">
      <span className=" font-poppins font-normal text-[14px] leading-[150%] text-dark">
        Share
      </span>
      <div className=" flex items-center gap-x-1.25">
        {icons.map((icon, index) => (
          <Link
            href={"#"}
            key={index}
            className="cursor-pointer h-10 w-10 group hover:bg-primary transition-all duration-300 bg-transparent rounded-full flex items-center justify-center"
          >
            <span className=" group-hover:text-white text-sub-secondary transition-all duration-300">
              {icon}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;

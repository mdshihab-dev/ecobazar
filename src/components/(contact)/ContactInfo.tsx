import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-[12px] shadow-xl  flex flex-col items-center gap-y-8 w-full h-full">

      <div className="flex flex-col items-center text-center">
        <HiOutlineLocationMarker className="text-primary text-5xl mb-3" />
        <p className="text-dark-primary font-poppins font-normal text-base leading-[170%]">
          2715 Ash Dr. San Jose, South <br /> Dakota 83475
        </p>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />


      <div className="flex flex-col items-center text-center">
        <HiOutlineMail className="text-primary text-5xl mb-3" />
        <p className="text-dark-primary font-poppins font-normal text-base leading-[170%]">
          Proxy@gmail.com <br />
          Help.proxy@gmail.com
        </p>
      </div>

      <div className="h-px bg-gray-100 w-full" />

      <div className="flex flex-col items-center text-center">
        <HiOutlinePhone className="text-primary text-5xl mb-3" />
        <p className="text-dark-primary font-poppins font-normal text-base leading-[170%]">
          (219) 555-0114 <br />
          (164) 333-0487
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
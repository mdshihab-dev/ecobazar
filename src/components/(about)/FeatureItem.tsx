import Image, { StaticImageData } from 'next/image'

interface PropsType {
    title: string,
    paragraph: string,
    src: StaticImageData,
    alt: string,
}

const FeatureItem = ({title,paragraph,src,alt}: PropsType) => {
  return (
    <div className=' flex items-center gap-x-4'>
        <div className=' relative h-18 w-18 rounded-full flex items-center justify-center'>
            <span className=' z-0 absolute h-full w-full bg-primary opacity-10 rounded-full'/>
            <Image src={src} alt={alt} />
        </div>
        <div>
            <h4 className=' font-poppins font-medium text-lg leading-[150%] text-dark'>
                {title}
            </h4>
            <p className='mt-2 font-poppins font-normal text-sm leading-[150%] text-light-gray'>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default FeatureItem
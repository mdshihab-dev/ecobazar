import { IoCheckmarkCircleOutline } from "react-icons/io5"

const DeliverDesc = () => {
  const listItem: string[] = [
    'Sed in metus pellentesque.',
    'Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.',
    'Maecenas ut nunc fringilla erat varius.'
  ]

  return (
    <div>
        <h3 className=" font-poppins font-semibold text-5xl leading-[120%] text-dark">
              We Delivered, You Enjoy Your Order.
        </h3>
        <p className=" mt-6 font-poppins font-normal text-text text-base leading-[150%]">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
        </p>

        <ul className=" mt-5 flex flex-col gap-4">
            {listItem.map((item,index)=> (
              <li key={index} className=" flex items-center gap-x-2">
                <IoCheckmarkCircleOutline className=" text-xl text-primary"/> 
                <span className="font-poppins font-normal text-text text-sm leading-[140%]"> {item} </span>
              </li>
            ))
            }
        </ul>
    </div>
  )
}

export default DeliverDesc
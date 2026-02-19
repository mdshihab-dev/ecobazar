"use client"

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
interface PropsType {
    currentPage: number,
    totalPages: number,
    pageChanger: (page:number)=> void
}

const Pagination = ({currentPage,totalPages,pageChanger}:PropsType) => {
        const pageNumbers: (number | string)[] = []
        let beforePage:number = currentPage - 1
        let afterPage:number = currentPage + 1

        pageNumbers.push(1)
        if (currentPage > 3) pageNumbers.push('...')
        
        if (currentPage === 1) afterPage += 2
        if (currentPage === 2) afterPage += 1

        if (currentPage === totalPages) beforePage -= 2
        else if (currentPage === totalPages - 1) beforePage -= 1
        
        for (let i = beforePage; i <= afterPage; i++) {
            if (i > 1 && i < totalPages) {
                pageNumbers.push(i)
            }
        }
        if (currentPage < totalPages - 2) pageNumbers.push('...')
        pageNumbers.push(totalPages)

  return (
    <div className=" mb-20 flex justify-center">
        <div className=" flex items-center justify-center gap-x-3">
            <button disabled={currentPage === 1}  onClick={()=> pageChanger(currentPage - 1)} className={`${currentPage === 1 ? 'bg-[#F2F2F2] border-transparent' : 'bg-white'} cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-[#e6e6e6]`}>
                <MdArrowBackIosNew className={`${currentPage === 1 ? 'text-[#BDBDBD]' : 'text-dark'}`}/>
            </button>

            {
              pageNumbers.map((item,index)=>{
                return  <button disabled={item === "..."} onClick={()=> pageChanger( item === '...' ? 0 : item as number )} key={index} className={`${currentPage === item ? "bg-primary text-white" : " bg-transparent text-text"} cursor-pointer font-poppins font-normal text-base leading-[150%] flex items-center justify-center w-9 h-9 rounded-full`}>
                    {item}
                </button>
              })  
            }

            <button disabled={currentPage === totalPages} onClick={()=> pageChanger(currentPage + 1)} className={`${currentPage === totalPages ? 'bg-[#F2F2F2] border-transparent' : 'bg-white'} cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-[#e6e6e6]`}>
                <MdArrowForwardIos className={`${currentPage === totalPages ? 'text-[#BDBDBD]' : 'text-dark'}`}/>
            </button>
        </div>
    </div>
  )
}

export default Pagination
"use client"
import { useState, createContext, type ReactNode } from "react";

interface ContextType {
  showProduct: number;
  setShowProduct: (val: number) => void;
}

export const ProductContext = createContext<ContextType>({
  showProduct: 16,
  setShowProduct: () => {},
})

const MainContext = ({children}: {children: ReactNode} ) => {
    const [showProduct, setShowProduct] = useState<number>(16)
     const [count,setCount] = useState<number>(1)
  return (
    <ProductContext.Provider value={{showProduct, setShowProduct}}>
        {children}
    </ProductContext.Provider>
  )
}

export default MainContext
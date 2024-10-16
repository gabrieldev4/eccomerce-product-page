import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextProps{
    item: number;
    setItem: React.Dispatch<React.SetStateAction<number>>
}

const CartContext = createContext<CartContextProps>({
    item: 0,
    setItem: ()=>{}
})

interface CartProvider{
    children: ReactNode
}

export function CartProvider({children}: CartProvider){
    const [item,setItem] = useState<number>(1)

    return (
        <CartContext.Provider value={{item,setItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useModal deve ser usado dentro de um Modal Provier')
    }
    return context
}
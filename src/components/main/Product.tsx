import { useState } from "react";
import { useCart } from "../../context/CartContext"
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export function Product(){
    const {item,setItem} = useCart()
    const [prevItem,setPrevItem] = useState<number>(item)
    const handleAddProduct = ()=>{
        if(item>=0){
            setPrevItem(prev=>prev+1)
        }
        else{
            setPrevItem(0)
        }
    }
    const handleRemoveProduct = ()=>{
        if(item>0){
            setPrevItem(prev=>prev-1)
        }
        else{
            setPrevItem(0)
        }
    }

    const handleSetItem = ()=>{
        setItem(prevItem)
    }

    return (
        <section className="bg-white max-[639px]:px-6 sm:px-12 lg:px-4 md:w-1/2 flex justify-center flex-col ">
            <header>
                <h3 className=" text-dark-grayish-blue text-sm font-bold uppercase text-left tracking-widest">sneaker company</h3>
                <h1 className="text-black text-3xl font-bold my-4">Fall Limited Edition Sneakers</h1>
            </header>
            <p className="text-lg text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            <div className="my-6">
                <div className="flex justify-between">
                    <div className="flex flex-row gap-6">
                        <span className="text-3xl font-bold">$125.00</span>
                        <span className="px-3 bg-black rounded-lg text-white text-lg font-bold leading-9">50%</span>
                    </div>
                    <span className="text-xl font-bold text-dark-grayish-blue line-through">$250.00</span>
                </div>
            </div>
            <footer className="sm:mb-20 lg:mb-0 md:flex md:gap-4 md:items-center">
                <div className="flex justify-between px-4 py-4 items-center gap-2 md:w-1/3 bg-light-grayish-blue rounded-lg">
                    <IoIosRemove className="text-primary text-4xl md:text-2xl font-bold cursor-pointer hover:opacity-90" onClick={handleRemoveProduct}/>
                    <span className="font-bold text-2xl md:text-xl">{prevItem}</span>
                    <IoIosAdd className="text-primary text-4xl md:text-2xl font-bold cursor-pointer hover:opacity-90" onClick={handleAddProduct}/>
                </div>
                <button 
                    className="w-full min-h-12 bg-primary rounded-2xl font-bold flex flex-row justify-center items-center gap-4 md:h-14 md:w-2/3 hover:opacity-90"
                    onClick={handleSetItem}    
                >
                    <IoCartOutline className="text-2xl"/>

                    <p className="md:py-0 ">
                    Add to Cart
                    </p>
                </button>
            </footer>
        </section>
    )
}
import { useCart } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa";

export function DropDown(){

    const {item,setItem} = useCart()
    const valueTotal = (item*125)

    const handleDeleteItems=()=>{
        setItem(0)
    }
    console.log(item)
    return (
        <div className="py-4 min-h-52 min-w-96 sm:w-96 sm:right-20 mx-2 absolute shadow-xl shadow-dark-grayish-blue top-20 bg-white rounded-lg z-40">
            <header className="border-b min-w-64 text-very-dark-blue border-grayish-blue pb-6 indent-6 ">Cart</header>
            {item > 0 ? (
                <div className="px-6">
                    <div className="flex items-center gap-6 justify-center my-6">
                        <img src="/image-product-1-thumbnail.jpg" alt="" className="rounded-lg h-12"/>
                        <div>
                            <p className="block text-dark-grayish-blue">Fall Limited Edition Sneakers</p>
                            <p className="block text-dark-grayish-blue">$125.00 x{item} <span className=" text-very-dark-blue font-semibold">{valueTotal +'.00'}</span></p>
                        </div>
                        <button onClick={()=>handleDeleteItems()}>
                            <FaTrashAlt className="font-normal text-dark-grayish-blue"/>
                        </button>
                    </div>
                    <footer className="flex">
                        <button className="mx-auto w-full mb-6 py-3 rounded-lg bg-primary text-very-dark-blue font-semibold">Checkout</button>
                    </footer>
                </div>
            )
            :(
                <div className="flex items-center min-h-36 px-6 mb-6 justify-center ">
                    <span className="font-semibold text-g">Your cart is empty</span>
                </div>
            )}
    </div>
    )
}
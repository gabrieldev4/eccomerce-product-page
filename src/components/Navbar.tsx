import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useModalContext } from "../context/ModalContext";
import { IoIosClose } from "react-icons/io";
import { DropDown } from "./Dropdown";
import { useCart } from "../context/CartContext";


export function NavBar(){

    const {openModal,closeModal,setOverlayOpaque,overlayOpaque,isModalOpen}= useModalContext()
    const {item} = useCart()

    // modal geral
    const handleCloseModal = ()=>{
        closeModal()
    }

    // menu
    const handleOpenMenu = () =>{
        setOverlayOpaque(true)
        openModal(
            <div className="bg-white w-60 absolute left-0 top-0 h-full p-6 md:hidden z-40">
                <button onClick={handleCloseModal} className="mb-6 text-dark-grayish-blue">
                    <IoIosClose size={32}/>
                </button>
                <ul className="flex flex-col space-y-3">
                    <a href=""className="font-bold text-dark-grayish-blue hover:text-very-dark-blue">Collections</a>
                    <a href=""className="font-bold text-dark-grayish-blue hover:text-very-dark-blue">Men</a>
                    <a href=""className="font-bold text-dark-grayish-blue hover:text-very-dark-blue ">Woman</a>
                    <a href=""className="font-bold text-dark-grayish-blue hover:text-very-dark-blue ">About</a>
                    <a href=""className="font-bold text-dark-grayish-blue hover:text-very-dark-blue ">Contact</a>
                </ul>
            </div>
        )
    }

    // dropdown
    const toggleDropdown = ()=>{
        if(isModalOpen){
            closeModal()
        }
        else{
            setOverlayOpaque(false)
            openModal(<DropDown/>)
        }
    }

    return (
        <nav className="py-5 md:py-0 px-4 lg:px-36 flex items-center justify-between  border-b border-grayish-blue z-10">
            <div className="flex items-center space-x-4" >
                <button onClick={handleOpenMenu} className="flex items-center md:hidden text-2xl cursor-pointer">
                    <FaBars className="text-2xl  text-very-dark-blue"/>
                </button>
                <div className="text-4xl tracking-tight text-very-dark-blue font-extrabold leading-7 mb-1 cursor-pointer">
                sneakers
                </div>
            </div>
          
            <div className="hidden md:flex h-full space-x-8">
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue py-8 border-b-2 border-transparent hover:border-primary">Collections</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue py-8 border-b-2 border-transparent hover:border-primary">Men</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue py-8 border-b-2 border-transparent hover:border-primary">Woman</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue py-8 border-b-2 border-transparent hover:border-primary">About</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue py-8 border-b-2 border-transparent hover:border-primary">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <span className="cursor-pointer relative" onClick={toggleDropdown}>
                    <IoCartOutline className="text-dark-grayish-blue text-3xl hover:text-black" />
                    <span className={`${item>0? '': 'hidden'} px-2 absolute bottom-5 left-4 bg-primary rounded-full text-white text-xs`}>{item}</span>
                    
                </span>
                <img src="/image-avatar.png" alt="foto de perfil" className="w-10 h-10 rounded-full border-2 cursor-pointer border-transparent hover:border-primary"/>
            </div>
        </nav>
    )
}
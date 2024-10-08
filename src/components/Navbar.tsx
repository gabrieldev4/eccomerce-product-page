import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useModalContext } from "../context/ModalContext";
import { IoIosClose } from "react-icons/io";

export function NavBar(){
    const {openModal,closeModal}= useModalContext()
    const handleCloseModal = ()=>{
        closeModal()
    }
    const handleOpenModal = () =>{
        openModal(
            <div className="bg-white w-2/3 p-4">
                <button onClick={handleCloseModal} className="mb-6 text-dark-grayish-blue">
                    <IoIosClose size={32}/>
                </button>
                <ul className="flex flex-col space-y-3">
                    <li className="font-bold text-very-dark-blue">Collections</li>
                    <li className="font-bold text-very-dark-blue">Men</li>
                    <li className="font-bold text-very-dark-blue">Women</li>
                    <li className="font-bold text-very-dark-blue">About</li>
                    <li className="font-bold text-very-dark-blue">Contact</li>
                </ul>
            </div>
        )
    }

    return (
        <nav className=" flex items-center justify-between px-6 py-4 ">
            <div className="flex items-center space-x-4">
                <button onClick={handleOpenModal} className="flex items-center md:hidden text-2xl cursor-pointer">
                    <FaBars className="text-2xl  text-very-dark-blue"/>
                </button>
                <div className="text-4xl tracking-tight text-very-dark-blue font-extrabold leading-7 mb-1 cursor-pointer">
                sneakers
                </div>
            </div>
          
            <div className="hidden md:flex space-x-8">
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue">Collections</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue">Men</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue">Woman</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue">About</a>
                <a href=""className="text-dark-grayish-blue hover:text-very-dark-blue">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <span className="cursor-pointer">
                    <IoCartOutline className="text-dark-grayish-blue text-3xl"/>
                </span>
                <img src="/image-avatar.png" alt="foto de perfil" className="w-10 h-10 rounded-full"/>
            </div>
        </nav>
    )
}
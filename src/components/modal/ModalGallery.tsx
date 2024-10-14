import { useModalContext } from "../../context/ModalContext";
import { useState } from "react"
import { IoIosClose } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ModalGalleryProps{
    currentPhoto: number
}

export function ModalGallery({currentPhoto}: ModalGalleryProps){
    const list = [
        { img: "/image-product-1.jpg", thumb: "/image-product-1-thumbnail.jpg"},
        { img: "/image-product-2.jpg", thumb: "/image-product-2-thumbnail.jpg"},
        { img: "/image-product-3.jpg", thumb: "/image-product-3-thumbnail.jpg"},
        { img: "/image-product-4.jpg", thumb: "/image-product-4-thumbnail.jpg"},
    ]
    
    const [currentIndexModal, setCurrentIndexModal] = useState<number>(currentPhoto)
    const {closeModal}= useModalContext()
        // modal
    const handleChangePhotoModal = (newIndex: number) =>{
        setCurrentIndexModal(newIndex)
    }

    const nextImageModal = () => {
        const nextIndex = currentIndexModal === list.length - 1 ? 0 : currentIndexModal + 1;
        setCurrentIndexModal(nextIndex);
        console.log("Agora vem"+ nextIndex)
    }

    const lastImageModal = ()=>{
        const lastIndex = currentIndexModal === 0 ? 0 : currentIndexModal-1
        setCurrentIndexModal(lastIndex)
    }

    return (
        <div className="bg-transparent fixed flex flex-col items-center gap-8 top-5 z-40">
            <div className="relative z-30 bg-transparent p-4 rounded-lg shadow-lg max-w-3xl w-full">
                {/* Botão de Fechar */}
                <button
                    onClick={closeModal}
                    className="absolute right-0 text-white hover:text-primary text-4xl"
                >
                    <IoIosClose/>
                </button>

                <div className="flex justify-center items-center mb-4 pt-10">
                    <div className="absolute z-30 bg-transparent w-108 flex justify-between gap-0 items-center">
                        <MdKeyboardArrowLeft 
                            className="bg-white rounded-full text-5xl cursor-pointer hover:text-primary"
                            onClick={lastImageModal}
                        />
                        <MdKeyboardArrowRight 
                            className="bg-white rounded-full text-5xl cursor-pointer hover:text-primary"
                            onClick={nextImageModal}   
                        />
                    </div>
                    <img
                    src={list[currentIndexModal].img}
                    className="w-96 "
                    />
                </div>
                <div className="flex justify-center gap-5">
                    <span onClick={()=>handleChangePhotoModal(0)} className="cursor-pointer hover:opacity-50 ">
                        <img src={list[0].thumb} alt="" className={`${currentIndexModal===0? 'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                    </span>
                    <span onClick={()=>handleChangePhotoModal(1)} className="cursor-pointer hover:opacity-50">
                        <img src={list[1].thumb} alt="" className={`${currentIndexModal===1 ? 'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                    </span>
                    <span onClick={()=>handleChangePhotoModal(2)} className="cursor-pointer hover:opacity-50">
                        <img src={list[3].thumb} alt="" className={`${currentIndexModal===2 ? 'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                    </span>
                    <span onClick={()=>handleChangePhotoModal(3)} className="cursor-pointer hover:opacity-50">
                        <img src={list[2].thumb} alt="" className={`${currentIndexModal===3 ?'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                    </span>
                </div>
            </div>
        </div>
    )
}
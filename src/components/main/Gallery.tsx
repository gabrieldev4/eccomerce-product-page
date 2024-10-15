import { useModalContext } from "../../context/ModalContext";
import { useState } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ModalGallery } from "../modal/ModalGallery";

export function Gallery(){

    const list = [
        { img: "/image-product-1.jpg", thumb: "/image-product-1-thumbnail.jpg"},
        { img: "/image-product-2.jpg", thumb: "/image-product-2-thumbnail.jpg"},
        { img: "/image-product-3.jpg", thumb: "/image-product-3-thumbnail.jpg"},
        { img: "/image-product-4.jpg", thumb: "/image-product-4-thumbnail.jpg"},
    ]
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const {openModal,setOverlayOpaque}= useModalContext()

    const nextImage = () => {
        const nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }

    const lastImage = ()=>{
        const lastIndex = currentIndex === 0 ? 0 : currentIndex-1
        setCurrentIndex(lastIndex)
    }

    const handleChangePhoto = (newIndex: number) =>{
        setCurrentIndex(newIndex)
    }

    const handleOpenModal = ()=>{
        console.log('abri')
        setOverlayOpaque(true)
        openModal(<ModalGallery currentPhoto={currentIndex}/>)
    }

    return (
        <div className="gap-10 flex flex-col md:w-1/2 justify-center">
            <div className="relative flex items-center justify-center">
                <div className="absolute bg-transparent w-full w- h-full flex items-center justify-between">
                    <MdKeyboardArrowLeft 
                        className="bg-white rounded-full text-4xl cursor-pointer sm:hidden z-40"
                        onClick={lastImage}
                    />
                    <MdKeyboardArrowRight 
                        className="bg-white rounded-full text-4xl cursor-pointer sm:hidden z-40"
                        onClick={nextImage}   
                    />
                </div>
                <img src={list[currentIndex].img} alt="" className="sm:h-96 sm:rounded-xl max-[575px]:pointer-events-none cursor-pointer z-30" onClick={handleOpenModal}/>
            </div>
            <div className="hidden sm:flex  gap-5 md:justify-center">
                <span onClick={()=>handleChangePhoto(0)} className="cursor-pointer hover:opacity-50 ">
                    <img src={list[0].thumb} alt="" className={`${currentIndex===0? 'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                </span>
                <span onClick={()=>handleChangePhoto(1)} className="cursor-pointer hover:opacity-50">
                    <img src={list[1].thumb} alt="" className={`${currentIndex===1 ? 'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                </span>
                <span onClick={()=>handleChangePhoto(2)} className="cursor-pointer hover:opacity-50">
                    <img src={list[3].thumb} alt="" className={`${currentIndex===2 ? 'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                </span>
                <span onClick={()=>handleChangePhoto(3)} className="cursor-pointer hover:opacity-50">
                    <img src={list[2].thumb} alt="" className={`${currentIndex===3 ?'border-2 border-primary opacity-50': ''} h-20 rounded-lg`}/>
                </span>
            </div>
        </div>
    )
}
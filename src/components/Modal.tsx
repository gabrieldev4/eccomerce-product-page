import ReactDOM  from "react-dom"
import { useModalContext } from "../context/ModalContext"
export function Modal(){
    const {isModalOpen,closeModal, modalContext,overlayOpaque} = useModalContext()

    if(!isModalOpen){return null}
    const clickOut = () =>{
        closeModal()
    }
    
    return ReactDOM.createPortal(
        <div>
            <div className="flex justify-center">
                {modalContext}
            </div>
            <div 
                className={`${overlayOpaque? 'bg-very-dark-blue bg-opacity-50':'bg-transparent'} fixed bottom-0 top-0 left-0 right-0 z-20`}
                onClick={clickOut}
            ></div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    )
}
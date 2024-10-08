import ReactDOM  from "react-dom"
import { useModalContext } from "../context/ModalContext"
export function Modal(){
    const {isModalOpen, modalContext} = useModalContext()

    if(!isModalOpen){return null}
    
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex">
            {modalContext}
        </div>,
        document.getElementById("modal-root") as HTMLElement
    )
}
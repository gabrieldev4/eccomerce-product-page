import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps{
    isModalOpen: boolean;
    modalContext: ReactNode;
    openModal: (content: ReactNode)=>void;
    closeModal: ()=>void;
}

const ModalContext = createContext<ModalContextProps | null>(null)

interface ModalProviderProps{
    children: ReactNode;
}

export function ModalProvider({children}:ModalProviderProps){
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false)
    const [modalContext,setModalContent] = useState<ReactNode>(null)

    const openModal = (content: ReactNode)=>{
        setIsModalOpen(true)
        setModalContent(content)
    }

    const closeModal = ()=>{
        setIsModalOpen(false)
    }
    return (
        <ModalContext.Provider value={{isModalOpen,closeModal,openModal, modalContext}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = ():ModalContextProps=>{
    const context = useContext(ModalContext)
    if(!context){
        throw new Error('useModal deve ser usado dentro de um Modal Provier')
    }
    return context
}
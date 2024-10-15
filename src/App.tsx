import { Modal } from "./components/modal/Modal"
import { NavBar } from "./components/header/Navbar"
import { Gallery } from "./components/main/Gallery"
import { Product } from "./components/main/Product"

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Modal/>
        <main className="max-[575px]:gap-8 sm:py-6 max-[767px]:flex-col gap-5 md:py-16 md:px-16 flex justify-center md:flex-row items-center xl:px-48">
          {/* GaleryProduct */}
          <Gallery/>
          <Product/>
        </main>
      </div>
    </>
  )
}

export default App

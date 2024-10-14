import { Modal } from "./components/Modal"
import { NavBar } from "./components/header/Navbar"
import { Gallery } from "./components/main/Gallery"

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Modal/>
        <main className="md:py-16 md:px-16 flex sm:py-6 sm:flex-col justify-center md:flex-row items-center lg:px-48">
          {/* GaleryProduct */}
          <Gallery/>
        </main>
      </div>
    </>
  )
}

export default App

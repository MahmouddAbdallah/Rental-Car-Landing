import Apps from "./components/Apps"
import Brands from "./components/Brands"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HowitWork from "./components/HowitWork"
import Reivews from "./components/Reivews"
import RentCar from "./components/RentCar"
import Services from "./components/Services"


const App = () => {

  return (
    <div className="xl:container">
      <Header />
      <Brands />
      <RentCar />
      <HowitWork />
      <Services />
      <Reivews />
      <Apps />
      <Footer />
    </div>
  )
}

export default App
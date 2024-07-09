

import CategoryList from "./components/main_page_components/Category"
import Header from "./components/general_components/Header"
import Footer from "./components/general_components/Footer"
import ProductList from "./components/general_components/ProductList"






// import './App.css'





function App() {

  return (
    <>
      <Header />
      <div className="container">
      <CategoryList />
      <ProductList />
      </div>
      <Footer />
    </>
  )
}

export default App

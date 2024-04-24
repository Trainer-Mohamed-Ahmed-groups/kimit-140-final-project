import { Routes, Route } from "react-router-dom"
import SiteNav from "./layout/SiteNav"
import Home from "./views/Home"
import Products from "./views/Products"
import SingleProduct from "./views/SingleProduct"
import ErrorPage from "./views/ErrorPage"
import { useTranslation } from "react-i18next"
import AddProduct from "./views/AddProduct"
import EditProduct from "./views/EditProduct"

function App() {
  let { i18n } = useTranslation()

  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/products/:id" Component={SingleProduct} />
        <Route path="/products/edit/:id" Component={EditProduct} />
        <Route path="/add_new_product" Component={AddProduct} />
        <Route path="/*" Component={ErrorPage} />
      </Routes>
    </div>
  )
}

export default App

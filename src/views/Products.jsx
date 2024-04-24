import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { Container, Row, Spinner } from "react-bootstrap"
import ProductCard from "../components/ProductCard";
export default function Products() {
    const [products, setProducts] = useState([])
    // const [titleFilter , setTitleFilter] = useState("")
    
    let { t } = useTranslation();

    let getProducts = () => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            {t('products_desc')}
            

            <Container>
                {
                    products.length > 0
                        ?
                        <Row className=" row-cols-md-3 g-4 row-cols-1">
                            {products.map(product =>
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                    getProducts={getProducts} />)}
                        </Row>
                        :
                        <div className="d-flex justify-content-center">
                            <Spinner animation="grow" />
                        </div>
                }
            </Container>
        </div>
    )
}

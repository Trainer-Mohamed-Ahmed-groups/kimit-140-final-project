import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {

    const [product, setProduct] = useState([])

    const params = useParams()

    console.log(params.id)

    let getProduct = () => {
        fetch("http://localhost:3000/products/" + params.id)
            .then(res => res.json())
            .then(res => setProduct(res))
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} width={200} />
            <p>{product.description}</p>
        </div>
    )
}

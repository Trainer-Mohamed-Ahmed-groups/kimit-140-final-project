/* eslint-disable react/prop-types */
import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

export default function ProductCard({ product, getProducts }) {

    const handleDelete = (id) => {
        Swal.fire({
            icon: "error",
            title: "Are your sure ",
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:3000/products/' + id, { method: 'DELETE' }).then(() => getProducts()).then(() => Swal.fire("Deleted !", "", "success"))
            }
        });
    }

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={product.image} height={250} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link className="btn btn-primary" to={`/products/${product.id}`}>Show more</Link>
                    <Link className="btn btn-info" to={`/products/edit/${product.id}`}>Edit</Link>
                    <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

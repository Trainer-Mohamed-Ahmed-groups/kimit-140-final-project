/* eslint-disable react/prop-types */
import { Col, Card } from "react-bootstrap"


export default function ProductCard({ product }) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={product.image} height={250} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}

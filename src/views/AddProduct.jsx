import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddProduct() {

    let [title, setTitle] = useState("")
    let [desc, setDesc] = useState("")

    const handler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: desc })
        };
        fetch('http://localhost:3000/products', requestOptions)
    }
    let handleSubmit = (ev) => {
        ev.preventDefault();
        ev.target.name === "title"
            ? setTitle(ev.target.value)
            : setDesc(ev.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <Form.Control
                className="my-3"
                onChange={handleSubmit}
                name="title"
                type="text"
                placeholder="name@example.com" />
            <Form.Control
                className="my-3"
                onChange={handleSubmit}
                name="desc"
                as="textarea"
                rows={3} />
            <Button variant="secondary" onClick={handler}>Add new</Button>
        </div>
    )
}

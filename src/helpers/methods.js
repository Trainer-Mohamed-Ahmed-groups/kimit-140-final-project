export const handleDelete = (id) => {
    fetch('http://localhost:3000/products/' + id, { method: 'DELETE' })
}
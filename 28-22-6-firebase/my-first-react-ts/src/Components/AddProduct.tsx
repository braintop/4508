import { useState } from "react"
import type { New_Product } from "../types/firebase"
import { productsCollection } from "../collections"
import { addDoc } from "firebase/firestore"

export default function AddProduct() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [completed, setCompleted] = useState(false)
    const handleSubmit = () => {
        console.log(name, description, price, completed)
        const newProduct: New_Product = {
            name,
            description,
            price,
            completed,
            createdAt: new Date()
        }
        addDoc(productsCollection, newProduct)
    }
    return (
        <div>
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            <button onClick={handleSubmit}>Add Product</button>
        </div>
    )
}
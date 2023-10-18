import axios from "axios";
import { useState } from "react";

export default function FormularioProducto({ onConfirmado }) {
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stocked, setStocked] = useState(false);
    const [name, setName] = useState('');

    async function guardar() {
        const producto = { category, price, stocked, name };
        console.log(producto);

        const respuesta = await axios.post('http://localhost:3000/products', producto);
        console.log(respuesta);

        onConfirmado();
    }

    return (
        <form>
            <input readOnly={true} onChange={e => setId(e.target.value)} value={id} placeholder="id" />
            <input onChange={e => setCategory(e.target.value)} value={category} placeholder="category" />
            <input onChange={e => setPrice(e.target.value)} value={price} placeholder="price" />
            <label>
                <input onChange={e => setStocked(e.target.checked)} type="checkbox" checked={stocked} />
                <span>Stocked</span>
            </label>
            <input onChange={e => setName(e.target.value)} value={name} placeholder="name" />
            <button type="button" onClick={() => guardar()}>Guardar</button>
        </form>
    );
}
import axios from 'axios';
import './ProductRow.css';

export default function ProductRow({ product, onEditar, onBorrar }) {
    async function borrar(id) {
        const respuesta = await axios.delete(`http://localhost:3000/products/${id}`);
        console.log(respuesta);
        onBorrar(respuesta);
    }
    
    async function editar(id) {
        const respuesta = await axios.get(`http://localhost:3000/products/${id}`);
        const product = await respuesta.data;
        // console.log('editar', product);
        onEditar(product);
    }



    return (
        <tr>
            <td className={product.stocked ? "" : "sinstock"}>
                {product.name}
            </td>
            <td className="precio">
                {product.price}
            </td>
            <td>
                <button onClick={() => editar(product.id)}>Editar</button>
                <button onClick={() => borrar(product.id)}>Borrar</button>
            </td>
        </tr>
    );
}

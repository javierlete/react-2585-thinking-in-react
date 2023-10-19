import axios from "axios";

export default function FormularioProducto({ product, setProduct, onConfirmado }) {
    async function guardar() {
        console.log(product);

        if(product.id){
            const respuesta = await axios.put(`http://localhost:3000/products/${product.id}`, product);
            console.log(respuesta);
        } else {
            const respuesta = await axios.post('http://localhost:3000/products', product);
            console.log(respuesta);
        }

        onConfirmado();
    }

    return (
        <form>
            {/* <pre>{JSON.stringify(product)}</pre> */}
            <input readOnly={true} value={product.id} placeholder="id" />
            <input onChange={e => setProduct({ ...product, category: e.target.value })} value={product.category} placeholder="category" />
            <input onChange={e => setProduct({ ...product, price: e.target.value })} value={product.price} placeholder="price" />
            <label>
                <input type="checkbox" onChange={e => setProduct({ ...product, stocked: e.target.checked })} checked={product.stocked} />
                <span>Stocked {product.stocked}</span>
            </label>
            <input onChange={e => setProduct({ ...product, name: e.target.value })} value={product.name} placeholder="name" />
            <button type="button" onClick={() => guardar()}>Guardar</button>
        </form>
    );
}
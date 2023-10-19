import axios from 'axios';
import FilterableProductTable from './componentes/FilterableProductTable';
import { useEffect, useState } from 'react';
import FormularioProducto from './componentes/FormularioProducto';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    stocked: false,
  });

  async function refrescarDatos() {
    const respuesta = await axios.get('http://localhost:3000/products');
    setProducts(await respuesta.data);
    // console.log(products);
  }

  useEffect(() => {
    refrescarDatos();
  }, []);

  return (
    <>
      <FormularioProducto onConfirmado={refrescarDatos} product={product} setProduct={setProduct} />
      <FilterableProductTable products={products} onEditar={setProduct} onBorrar={refrescarDatos} />
    </>
  );
}

export default App;

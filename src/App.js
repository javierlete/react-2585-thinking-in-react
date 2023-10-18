import axios from 'axios';
import FilterableProductTable from './componentes/FilterableProductTable';
import { useEffect, useState } from 'react';
import FormularioProducto from './componentes/FormularioProducto';

function App() {
  const [products, setProducts] = useState([]);

  async function refrescarDatos() {
    const respuesta = await axios.get('http://localhost:3000/products');
    setProducts(await respuesta.data);
    console.log(products);
  }

  useEffect(() => {
    refrescarDatos();
  }, [products]);

  return (
    <>
      <FormularioProducto onConfirmado={refrescarDatos} />
      <FilterableProductTable products={products} />
    </>
  );
}

export default App;

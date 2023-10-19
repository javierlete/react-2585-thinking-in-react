import axios from 'axios';
import FilterableProductTable from './componentes/FilterableProductTable';
import { useEffect, useState } from 'react';
import FormularioProducto from './componentes/FormularioProducto';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    stocked: false,
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <FormularioProducto onConfirmado={refrescarDatos} product={product} setProduct={setProduct} />
          <FilterableProductTable products={products} onEditar={setProduct} onBorrar={refrescarDatos} />
        </>
      ),
    },
    {
      path: "about",
      element: (<>
        <div>About</div>
        <a href="/">FilterableProductTable</a>
        <Link to="/">FilterableProductTable</Link>
      </>),

    },
  ]);
  async function refrescarDatos() {
    const respuesta = await axios.get('http://localhost:3000/products');
    setProducts(await respuesta.data);
    // console.log(products);
  }

  useEffect(() => {
    refrescarDatos();
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

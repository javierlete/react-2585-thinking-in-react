import FilterableProductTable from './componentes/FilterableProductTable';
import { PRODUCTS } from './constantes/PRODUCTS';

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;

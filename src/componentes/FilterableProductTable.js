import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('fruit');
    const [inStockOnly, setInStockOnly] = useState(true);

    return (
        <div>
            <SearchBar filterText={filterText}
                inStockOnly={inStockOnly} />
            <ProductTable products={products} filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}

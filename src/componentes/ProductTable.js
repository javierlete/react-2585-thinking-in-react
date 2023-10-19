import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly, onBorrar }) {
    let category = null;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products
                    .filter(product =>
                        product.name.toLowerCase().includes(filterText.toLowerCase()) &&
                        (inStockOnly ? product.stocked : true))
                    .map(product => (<>
                        {category !== product.category &&
                            <ProductCategoryRow key={category} category={category = product.category} />}
                        <ProductRow onBorrar={onBorrar} key={product.name} product={product} />
                    </>
                    ))}
            </tbody>
        </table>
    );
}
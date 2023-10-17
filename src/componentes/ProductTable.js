import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
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
                {products.map(product => (<>
                    {category != product.category && 
                        <ProductCategoryRow category={category = product.category} />}
                    <ProductRow key={product.name} product={product} />
                </>
                ))}
            </tbody>
        </table>
    );
}
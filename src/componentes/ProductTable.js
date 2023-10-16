import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow />
                <ProductRow />
                <ProductRow />
                <ProductCategoryRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </tbody>
        </table>
    );
}
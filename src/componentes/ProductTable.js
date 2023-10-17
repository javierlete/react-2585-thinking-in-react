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
                <ProductCategoryRow category="Fruits" />
                <ProductRow product={{ name: "Apple", price: 1.0 }} />
                <ProductRow product={{ name: "Orange", price: 0.5 }} />
                <ProductCategoryRow category="Vegetables" />
                <ProductRow product={{ name: "Garlic", price: 1.0 }} />
                <ProductRow product={{ name: "Tomato", price: 0.5 }} />
                <ProductRow product={{ name: "Onion", price: 0.3 }} />
            </tbody>
        </table>
    );
}
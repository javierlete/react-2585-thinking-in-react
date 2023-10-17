import './ProductRow.css';

export default function ProductRow({ product }) {
    return (
        <tr>
            <td className={product.stocked ? "" : "sinstock"}>
                {product.name}
            </td>
            <td className="precio">
                {product.price}
            </td>
        </tr>
    );
}

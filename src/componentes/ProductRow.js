import './ProductRow.css';

export default function ProductRow({ product }) {
    return (
        <tr>
            <td>
                {product.name}
            </td>
            <td className="precio">
                {product.price} €
            </td>
        </tr>
    );
}

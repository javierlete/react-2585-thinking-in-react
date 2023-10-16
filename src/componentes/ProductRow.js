import './ProductRow.css';

export default function ProductRow() {
    return (
        <tr>
            <td>
                Producto
            </td>
            <td className="precio">
                {Math.round(Math.random() * 1000)} €
            </td>
        </tr>
    );
}

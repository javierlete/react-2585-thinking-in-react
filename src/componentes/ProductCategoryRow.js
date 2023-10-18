import './ProductCategoryRow.css';

export default function ProductCategoryRow({ category }) {
    return (
        <tr>
            <td className="categoria" colSpan={2}>
                {category}
            </td>
        </tr>
    );
}

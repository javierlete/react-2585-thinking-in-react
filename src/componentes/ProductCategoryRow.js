import './ProductCategoryRow.css';

export default function ProductCategoryRow({ category }) {
    return (
        <tr>
            <td class="categoria" colspan="2">
                {category}
            </td>
        </tr>
    );
}

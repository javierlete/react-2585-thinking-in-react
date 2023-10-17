export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <div>
            <div>
                <input onChange={e => onFilterTextChange(e.target.value)} value={filterText} placeholder="Search..." />
            </div>
            <div>
                <label>
                    <input type="checkbox" onChange={e => onInStockOnlyChange(e.target.checked)} checked={inStockOnly} />
                    <span>Only show products in stock</span>
                </label>
            </div>
        </div>
    );
}
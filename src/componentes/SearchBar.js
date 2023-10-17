export default function SearchBar({ filterText, inStockOnly }) {
    return (
        <div>
            <div>
                <input value={filterText} placeholder="Search..." />
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={inStockOnly} />
                    <span>Only show products in stock</span>
                </label>
            </div>
        </div>
    );
}
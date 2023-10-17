export default function SearchBar() {
    return (
        <div>
            <div>
                <input placeholder="Search..." />
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    <span>Only show products in stock</span>
                </label>
            </div>
        </div>
    );
}
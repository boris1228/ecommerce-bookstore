import "../css/SearchBox.css";

const SearchBox = () => {
    return ( 
        <div className="search-box">
            <h2>Search Condition: </h2>
            <form>
                <label>Item Number: </label>
                <input type="text" id="item-number"/>
                <label>Item Name: </label>
                <input type="text" id="item-name" />
                <input type="submit" id="submit" value="Check" />
                <button onClick="" id="export">Export</button>
            </form>
        </div>
     );
}
 
export default SearchBox;
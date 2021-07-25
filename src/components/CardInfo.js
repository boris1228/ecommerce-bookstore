import '../css/CardInfo.css';

export default function CardInfo({books}){

    return(
        <div className="product-info d-flex flex-column text-light">
            <div className="book-title">{books.name}</div>
            <div class="left-align d-flex flex-row">{books.authors} 
            </div>
            <div className="book-description overflow-auto">{books.longDescription}</div>
        </div>
    )

}
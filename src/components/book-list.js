import react, { Components } from 'react';

export default class BookList extends Components {
    renderList () {
        return this.props.books.map((book) => {
            <li key={book.title} className="list-group-item">{book.title}</li>
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
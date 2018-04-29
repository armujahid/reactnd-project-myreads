import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  render() {
    const {books, onShelfChange} = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} onShelfChange={onShelfChange}/>
          </li>
        ))}
      </ol>
    )
  }
}

export default BooksGrid

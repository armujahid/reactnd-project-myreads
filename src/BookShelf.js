import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  render() {
    const {title, books, onShelfChange} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={books} onShelfChange={onShelfChange}/>
        </div>
      </div>
    )
  }
}

export default BookShelf

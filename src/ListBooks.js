import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  render() {
    const { books, onShelfChange } = this.props

    const groupedBooks = books.reduce(function(result, current) {
      result[current.shelf] = result[current.shelf] || []
      result[current.shelf].push(current)
      return result
    }, [])

    const currentlyReading = groupedBooks['currentlyReading']
    const wantToRead = groupedBooks['wantToRead']
    const read = groupedBooks['read']

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {currentlyReading && <BookShelf title="Currently Reading" books={currentlyReading} onShelfChange={onShelfChange}/>}
            {wantToRead && <BookShelf title="Want to Read" books={wantToRead} onShelfChange={onShelfChange}/>}
            {read && <BookShelf title="Read" books={read} onShelfChange={onShelfChange}/>}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks

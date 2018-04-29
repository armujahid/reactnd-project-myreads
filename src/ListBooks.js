import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf';


class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  // TODO: find available titles and loop on them

  render() {
    const { books, onShelfChange } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="A" books={books} onShelfChange={onShelfChange}/>
            <BookShelf title="B" books={books} onShelfChange={onShelfChange}/>
            <BookShelf title="C" books={books} onShelfChange={onShelfChange}/>
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

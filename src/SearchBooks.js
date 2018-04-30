import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    booksInShelf: PropTypes.array.isRequired,
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    // prevent ajax call if search box is empty
    if (!query) {
      this.setState({books: []})
      return
    }
    this.props.onSearch(query).then(res => {
      if (res) {
        if (res.error) {
          this.setState({books: []})
        } else {
          this.setState({ books : res })
        }
      }
    })
  }

  render() {
    const { onShelfChange } = this.props
    const booksWithShelf = this.state.books.map(book => {
      const bookInShelf = this.props.booksInShelf.find( p => p.id === book.id);
      return Object.assign({}, bookInShelf, book)
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={booksWithShelf} onShelfChange={onShelfChange}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks

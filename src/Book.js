import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  render() {
    const { book, onShelfChange } = this.props;
    // TODO: add media query to conditionally display small and large thumbnail

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <BookShelfChanger shelf={book.shelf} onShelfChange={onShelfChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && (
            <div className="book-authors">
              {book.authors.map(author => (
                <p key={author}>{author}</p>
              ))}
            </div>
          )
        }
      </div>
    )
  }
}

export default Book

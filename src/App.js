import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookShelf = (book , shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // updating state when state is an array
      // https://stackoverflow.com/a/37663294/2073920
      // merge object
      // https://stackoverflow.com/a/171256/2073920
      this.setState(previous => {
        const index = previous.books.findIndex(p => p.id === book.id)
        // replace book if it already exists after updating shelf prop
        if (index !== -1) {
          return {
            books: [
              ...previous.books.slice(0,index),
              Object.assign({}, previous.books[index], { shelf }),
              ...previous.books.slice(index+1)
            ]
          }
        }
        // add book after adding shelf prop
        const books = previous.books.slice();
        books.push(Object.assign({}, book, { shelf }));
        return { books }
      })
    })
  }

  searchBooks = (query) => BooksAPI.search(query).then(books => books)

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            onSearch={this.searchBooks}
            booksInShelf={books}
            onShelfChange={this.updateBookShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks books={books} onShelfChange={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp

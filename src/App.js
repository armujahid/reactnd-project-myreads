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
      this.setState(previous => {
        const index = previous.books.findIndex(p => p.id === book.id)
        return {
          books: [
            ...previous.books.slice(0,index),
            Object.assign({}, previous.books[index], { shelf }),
            ...previous.books.slice(index+1)
          ]
        }
      })
    })
  }

  searchBooks(query) {
    return BooksAPI.search(query).then(books => books)
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            onSearch={this.searchBooks.bind(this)}
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

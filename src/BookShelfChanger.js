import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  render() {
    const { shelf, onShelfChange } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={(event) => onShelfChange(event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger

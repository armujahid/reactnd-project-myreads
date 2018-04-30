import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    shelf: PropTypes.string,
    onShelfChange : PropTypes.func.isRequired
  }

  render() {
    const { shelf, onShelfChange } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={shelf || 'none'} onChange={(event) => onShelfChange(event.target.value)}>
          <option value="moveTo" disabled>Move to...</option>
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

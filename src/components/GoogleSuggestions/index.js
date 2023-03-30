import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  highlightUser = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-div">
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="img-deco"
            />
          </div>
          <div className="div-deco">
            <div className="input-deco">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="img-deco1"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search Google"
              />
            </div>
            <ul>
              {searchResults.map(eachItem => (
                <SuggestionItem
                  details={eachItem}
                  key={eachItem.id}
                  highlightUser={this.highlightUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

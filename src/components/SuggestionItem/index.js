import './index.css'

const SuggestionItem = props => {
  const {details, highlightUser} = props
  const {suggestion, id} = details

  const highlighting = () => {
    highlightUser(suggestion)
  }

  return (
    <li className="user-card-container">
      <p> {suggestion} </p>
      <button className="delete-button" type="button" onClick={highlighting}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

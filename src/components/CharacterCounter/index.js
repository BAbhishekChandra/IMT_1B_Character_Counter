import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CountItem from '../CountItem'
import './index.css'

class CharacterCounter extends Component {
  state = {wordCharacterCountList: [], searchValue: ''}

  onChangeSearchInputValue = event => {
    this.setState({searchValue: event.target.value})
  }

  onSubmitAddCharacterWordLength = event => {
    event.preventDefault()
    const {searchValue} = this.state
    // console.log(searchValue)
    // console.log(searchValue.length)
    const newWordCount = {
      id: uuidv4(),
      word: searchValue,
      characterCount: searchValue.length,
    }
    this.setState(prevState => ({
      wordCharacterCountList: [
        ...prevState.wordCharacterCountList,
        newWordCount,
      ],
      searchValue: '',
    }))
  }

  render() {
    const {wordCharacterCountList, searchValue} = this.state
    // console.log(wordCharacterCountList)

    const ulClassName =
      wordCharacterCountList.length === 0
        ? 'inner-light-yellow-container-0'
        : 'inner-light-yellow-container-greater-than-zero'

    return (
      <div className="character-counter-container">
        <div className="yellow-class-container">
          <div className="yellow-container">
            <h1 className="heading-yellow">
              Count the characters like a <br /> Boss...
            </h1>
          </div>
          <ul className={ulClassName}>
            {wordCharacterCountList.length !== 0 &&
              wordCharacterCountList.map(eachItem => (
                <CountItem key={eachItem.id} wordDetails={eachItem} />
              ))}
            {wordCharacterCountList.length === 0 && (
              <img
                className="no-user-inputs-image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </ul>
        </div>
        <div className="blue-container">
          <h1 className="character-counter-heading">Character Counter</h1>
          <form
            className="search-add-button-container"
            onSubmit={this.onSubmitAddCharacterWordLength}
          >
            <input
              type="text"
              className="character-input-search"
              placeholder="Enter the Characters here"
              value={searchValue}
              onChange={this.onChangeSearchInputValue}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter

import './index.css'

const CountItem = props => {
  const {wordDetails} = props
  const {word, characterCount} = wordDetails
  // console.log(id, word, characterCount)

  return (
    <li className="count-item">
      <p className="word-name">{word}&nbsp; : &nbsp;</p>
      <p className="character-count">{characterCount}</p>
    </li>
  )
}

export default CountItem

// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, onclicked, isActive} = props
  const {tabId, displayText} = eachItem
  const clicked = () => {
    onclicked(tabId)
  }
  const classname = isActive ? 'clicked-tab' : ''
  return (
    <li className="tab-item">
      <button className={`button ${classname}`} onClick={clicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

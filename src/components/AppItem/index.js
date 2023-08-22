// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appId, appName, imageUrl, category} = eachItem
  return (
    <li className="card-bg">
      <img className="card-img" alt={appName} src={imageUrl} />
      <p className="card-heading">{appName}</p>
    </li>
  )
}

export default AppItem

// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onDebit} = props
  const {value} = denominationDetails

  const onDebitAmount = () => {
    onDebit(value)
  }
  return (
    <li className="denomination-item">
      <button onClick={onDebitAmount}>{value}</button>
    </li>
  )
}
export default DenominationItem

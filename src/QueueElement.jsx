import PropTypes from 'prop-types';
import "./QueueElement.css"

function QueueElement({ username, amount, message, type }) {
  function refineType(type) {
    if (type === "subscriber") {
      return 'Sub'
    } else {
      return 'Tip'
    }
  }

  return (
    <div className="qe-container">
      <div className="qe-header">
        <h5 className="qe-username">{username}</h5>
        <h5 className="qe-type">{refineType(type)}</h5>
      </div>
      <div className="qe-middler">
        <h5 className="qe-amount">${amount}</h5>
      </div>
      <div className="qe-footer">
        <h5 className="qe-message">{message}</h5>
      </div>
    </div>
  );
}

export default QueueElement;

QueueElement.propTypes = {
  username: PropTypes.string,
  amount: PropTypes.number,
  message: PropTypes.string,
  type: PropTypes.string
}

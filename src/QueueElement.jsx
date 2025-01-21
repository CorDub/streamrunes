import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "./QueueElement.css"

function QueueElement({ username, amount, message, type }) {
  const [messageLong, setMessageToLong] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const uncutTextRef = useRef(null);

  useEffect(() => {
    if (message.length > 150) {
      setMessageToLong(true);
    }
  }, [message]);

  function refineType(type) {
    if (type === "subscriber") {
      return 'Sub'
    } else {
      return 'Tip'
    }
  }

  function cutText(message) {
    if (message.length > 154) {
      const cut_message = message.slice(0, 154) + "...";
      return cut_message;
    }
    return message;
  }

  // function displayUncutText() {
  //   uncutTextRef.current.classList.remove('hidden');
  // }

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
        {messageLong ?
          <div className="qe-message-long">
            <h5
              className="qe-message"
              onMouseEnter={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}>{cutText(message)}</h5>
            <h5 className={isHovered ?
              "qe-full-message-long" :
              "qe-full-message-long hidden"}>{message}</h5>
          </div>
          :
          <h5 className="qe-message">{message}</h5>
        }
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

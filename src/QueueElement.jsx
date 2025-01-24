import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./QueueElement.css"

function QueueElement({
  username,
  amount,
  message,
  type,
  isSpeakButtonHovered,
  isSpeakButtonClicked,
  firstElement }) {

  const [messageLong, setMessageToLong] = useState(false);
  const [isHovered, setHovered] = useState(false);

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
    const cut_message = [];
    cut_message.push(message.slice(0, 154) + "...");
    cut_message.push('...'+ message.slice(155, message.length-1))
    return cut_message;
  }

  function determineClassName() {
    if (firstElement) {
      if (isSpeakButtonClicked) {
        return "qe-container end";
      }

      if (isSpeakButtonHovered) {
        return "qe-container gold";
      }
    } else {
      if (isSpeakButtonClicked) {
        return "qe-container top";
      }
    }
    return "qe-container";
  }

  function animateUp () {
    const rest = document.querySelectorAll('.qe-container top');
    const first = document.querySelector("qe-container gold");
    rest.forEach(element => {
      // element.style.transform = `translateY(-${first.offsetHeight}px)`;
      element.style.setProperty('--offsetHeight', `-${first.offsetHeight}px`);
    })
  }

  useEffect(() => {
    animateUp()
  }, [isSpeakButtonClicked]);

  return (
    <div className={determineClassName()}>
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
              onMouseOut={() => setHovered(false)}>{cutText(message)[0]}</h5>
            <h5 className={isHovered ?
              "qe-full-message-long" :
              "qe-full-message-long hidden"}>{cutText(message)[1]}</h5>
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
  type: PropTypes.string,
  isSpeakButtonHovered: PropTypes.bool,
  isSpeakButtonClicked: PropTypes.bool,
  firstElement: PropTypes.bool
}

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// styles
import './Modal.scss';

const Modal = ({ renderHeader, renderContent, renderFooter, closeModal }) => {
  // if (!show) {
  //   return null
  // }
  // const [isFalse, setStatus] = useState();
  // toggleSideView = e => {
  //   e.preventDefault();
  //   setStatus(!isFalse);
  // };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span
            className="close"
            onClick={() => closeModal()}
          >&#9587;</span>
          <h5>{renderHeader()}</h5>
        </div>
        <div className="modal-body">{renderContent()}</div>
        <div className="modal-footer flex-end">
          {renderFooter && renderFooter()}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;

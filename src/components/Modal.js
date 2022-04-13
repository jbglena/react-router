import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) =>{

    return ReactDOM.createPortal(
        <div className="ui dimmer show modals visible">
            <div className="ui raised very padded text container segment">
                <h1>I am a modal</h1>
            </div>
        </div>,
        document.querySelector('#aboutSection-modal')
    )
}

export default Modal
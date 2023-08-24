import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({children}) => {

    return ReactDOM.createPortal(
        <div className="modalDisplay">
            {children}
        </div>,  
      document.getElementById("modal")
      );

}
    

export { Modal}


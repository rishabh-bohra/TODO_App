import './Popup.css';
const Popup = (props) => {
    return (
        <div onClick={props.close} className='backdrop'>
        <div className="popup-container">

            <p > Are you Done with this Task!!</p>
            <div>
            <button onClick={props.close}>No</button> 
            <button onClick={props.isSurefn}>Yes</button>
            </div>
        </div>
        </div>
    )

}
export default Popup;
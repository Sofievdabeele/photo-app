const Modal = ({ selectedImage }) => {

    return (
        <div className="backdrop">
            <img src={selectedImage} alt="Enlarged clicked image" />
        </div>
    )
}
export default Modal;
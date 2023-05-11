const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (e) => {
        console.log(e);

        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null);
        }
      }
    

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="Enlarged clicked image" />
        </div>
    )
}
export default Modal;
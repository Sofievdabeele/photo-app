import useFirestore from "../hooks/useFirestore";


const ImageGrid = () => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="img-grid">
            Images
        </div>
    )
}
export default ImageGrid;
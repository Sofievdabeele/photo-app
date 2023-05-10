import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
        <div className="img-grid">
          {docs && docs.map((doc) => {
            return (
              <div className="image-wrap" key={doc.id}>
                <img src={doc.url} alt="uploaded picture from my documents" />
              </div>
            );
          })}
        </div>
      );
};

export default ImageGrid;




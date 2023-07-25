import axios from "axios";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";
import { fetchAllProducts } from "../../store/slices/products";

export const MultiplesImagenes = (props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState({ array: {} });
  const [loading, setLoading] = useState("");
  const handleDrop = (files) => {
    console.log(files);
  };
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-center">Sube tus imagenes aqui</h1>
        <Dropzone
          clasname="dropzone"
          onDrop={handleDrop}
          onChange={(e) => setImage(e.target.value)}
          value={image}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Coloca tus imagenes aqui o clickea para seleccionar</p>
              </div>
            </section>
          )}
        </Dropzone>
      </Container>
    </div>
  );
};

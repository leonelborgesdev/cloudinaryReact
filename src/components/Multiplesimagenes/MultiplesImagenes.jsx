import axios from "axios";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";
import { fetchAllProducts } from "../../store/slices/products";
import { fetchCreateProduct } from "../../store/slices/product";

export const MultiplesImagenes = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({ array: {} });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };
  const handleDrop = (files) => {
    setProduct({
      ...product,
      ["image"]: files[0],
    });
    console.log(product);
  };
  const handleSubmid = () => {
    dispatch(fetchCreateProduct(product));
  };
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
        <div>
          <p>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} />
          </p>
          <p>
            <label>Description:</label>
            <input type="text" name="description" onChange={handleChange} />
          </p>
          <p>
            <label>Price:</label>
            <input type="number" name="price" onChange={handleChange} />
          </p>
          <button onClick={handleSubmid}>Crear</button>
        </div>
      </Container>
    </div>
  );
};

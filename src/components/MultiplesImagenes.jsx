import { useState } from "react";
import Dropzone from "react-dropzone";
import { Container } from "reactstrap";

export const MultiplesImagenes = (props) => {
  const [image, setImage] = useState({ array: {} });
  const [Loading, setLoading] = useState("");
  const handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "Learning");
      formData.append("api_key", "155765619734214");
      formData.append("timestamp", (Date.now() / 1000) | 0);
    });
  };
  return (
    <div>
      <Container>
        <h1 className="text-center">Sube tus imagenes aqui</h1>
        <Dropzone
          clasname="dropzone"
          onChange={(e) => setImage(e.target.value)}
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

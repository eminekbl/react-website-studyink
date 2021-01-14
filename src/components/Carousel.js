import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Carousel() {
  return (
    <Carousel fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/fdgbQhH/Group-98.png"
          alt="First slide"
        />
        <Carousel.Caption className="col-4">
          <p>
            Access and share thousands of resources online or offline. Include
            math, science, stories, and more. Works offline.Online courses for
            creative minds. Learn with top professionals in the creative field.
          </p>
          <h3>Niara Jhonson</h3>
          <p>Student of Marketing Department</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ZJPY6Hd/Group-9sacmn.png"
          alt="Third slide"
        />

        <Carousel.Caption className="col-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consequat eros commodo felis consequat vulputate. Pellentesque
            aliquet varius lorem id lobortis. Aenean eu turpis tempus, pretium
            purus tempor, varius magna. Praesent
          </p>
          <h3>Jordan Peters</h3>
          <p>Student of Marketing Department</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

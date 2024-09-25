import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";

const image_hosting_key = "9f07225b8047e319723efcc4d4f9ca73";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const TypesAdmin = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [model, setModel] = useState([])


  const onSubmit = async (data) => {
    try {
      // Handle a single image upload
      if (data.img && data.img[0]) {
        const imageFile = new FormData();
        imageFile.append("image", data.img[0]);

        // Upload the image to the image hosting API
        const res = await axios.post(image_hosting_api, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Check for a successful response and assign the image URL
        if (res && res.data && res.data.data && res.data.data.display_url) {
          data.img = res.data.data.display_url;
        } else {
          throw new Error("Unexpected response format from image hosting API");
        }
      } else {
        data.img = ""; // Set img to an empty string if no image is uploaded
      }

      // Set the complete status and admin email
      data.complete = true;
      data.adminEmail = user.email;
      data.courier_id="id";

      // Submit the data to your backend
      const response = await fetch(`http://localhost:5000/service`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.modifiedCount) {
        Swal.fire("Success Upload!");
        reset(); // Reset the form after successful submission
      } else {
        Swal.fire("Failed to upload.");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("An error occurred during the upload.");
    }
  };

  useEffect(()=>{
    fetch('http://localhost:5000/getpostadmin')
    .then(res=>res.json())
    .then(data=>setModel(data))
},[])

  return (
    <div className="py-5 edit-profile">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div
              className="login-form text-center shadow"
              style={{ background: "#113350", borderRadius: "20px" }}
            >
              <h2 className="mb-5 text-white">Upload Product</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("types", { required: true })}
                  placeholder="Types example: shirt/genji"
                />
                <br />
                <input
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("size", { required: true })}
                  placeholder="M/L/XL/XXL"
                />
                <br />
                <input
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("Fabric", { required: true })}
                  placeholder="Fabric: Indian tencel cotton"
                />
                <br />
                <input
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("gender", { required: true })}
                  placeholder="Gender: male/female"
                />
                <br />
                <input
                  type="number"
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("ProductPrice", { required: true })}
                  placeholder="Product Price"
                />
                <br />
                <input
                  type="file"
                  {...register("img", { required: true })}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    background: "white",
                    padding: "5px",
                  }}
                  className="w-75 mb-3"
                />
                <br />
                <input
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("categories", { required: true })}
                  placeholder="Product categories example: t-shirt"
                />
                <br />
                <input
                  style={{ fontWeight: "600", color: "#0E1621" }}
                  className="w-75 mb-3"
                  {...register("description", { required: true })}
                  placeholder="Description"
                />
                <br />
                <button className="submit-all" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TypesAdmin;

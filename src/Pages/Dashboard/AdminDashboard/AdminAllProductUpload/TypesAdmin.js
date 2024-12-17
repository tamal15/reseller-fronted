import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";

const image_hosting_key = "9f07225b8047e319723efcc4d4f9ca73";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const TypesAdmin = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [model, setModel] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = async (data) => {
    setLoading(true); // Start loading
    try {
      // Single image upload
      if (data.img && data.img[0]) {
        const imageFile = new FormData();
        imageFile.append("image", data.img[0]);
        const res = await axios.post(image_hosting_api, imageFile, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (res?.data?.data?.display_url) {
          data.img = res.data.data.display_url;
        } else {
          throw new Error("Error uploading the single image.");
        }
      } else {
        data.img = "";
      }

      // Multiple image uploads
      const imageUrls = [];
      if (data.multipleimg && data.multipleimg.length > 0) {
        for (let i = 0; i < data.multipleimg.length; i++) {
          const imageFile = new FormData();
          imageFile.append("image", data.multipleimg[i]);
          const res = await axios.post(image_hosting_api, imageFile, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          if (res?.data?.data?.display_url) {
            imageUrls.push(res.data.data.display_url);
          } else {
            throw new Error("Error uploading multiple images.");
          }
        }
      }
      data.multipleimg = imageUrls;

      // Additional form data
      data.complete = true;
      data.adminEmail = user.email;
      data.courier_id = "id";

      // Send data to backend
      const response = await fetch(`https://server.exportmark.com/service`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Product uploaded successfully!",
          icon: "success",
          timer: 2000,
        });
        reset();
      } else {
        Swal.fire({
          title: "Failed",
          text: "Product upload failed.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred during the upload.",
        icon: "error",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetch("https://server.exportmark.com/getpostadmin")
      .then((res) => res.json())
      .then((data) => setModel(data));
  }, []);

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
                  {...register("size", { required: true })}
                  placeholder="M/L/XL/XXL"
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
                  type="file"
                  multiple
                  {...register("multipleimg", { required: true })}
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    background: "white",
                    padding: "5px",
                  }}
                  className="w-75 mb-3"
                />
                <br />
                <textarea
                  style={{
                    fontWeight: "600",
                    color: "#0E1621",
                    borderRadius: "8px",
                  }}
                  className="w-75 mb-3"
                  rows={4}
                  {...register("description", { required: true })}
                  placeholder="Description"
                ></textarea>
                <br />
                <Form.Group
                  as={Col}
                  controlId="formGridRating"
                  style={{
                    marginLeft: "74px",
                    marginRight: "74px",
                    borderRadius: "15px",
                    color: "black",
                  }}
                >
                  <select
                    style={{ borderRadius: "30px" }}
                    required
                    className="form-control shadow-none"
                    {...register("types")}
                  >
                    <option>Select categories</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Pant">Pant</option>
                    <option value="Shoe">Shoe</option>
                    <option value="Child">Child</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Computer-Market">Computer-Market</option>
                    <option value="Female-Dress">Female-Dress</option>
                    <option value="Male-Dress">Male-Dress</option>
                    <option value="Book-Shop">Book-Shop</option>
                    <option value="Home-Kitchen">Home-Kitchen</option>
                    <option value="Islamic-Product">Islamic-Product</option>
                  </select>
                </Form.Group>
                <br />
                <button className="submit-all" type="submit" disabled={loading}>
                  {loading ? (
                    <Spinner
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                  ) : (
                    "Submit"
                  )}
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

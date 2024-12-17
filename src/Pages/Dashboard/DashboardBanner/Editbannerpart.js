import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, Button, Container } from "react-bootstrap";

const image_hosting_key = "9f07225b8047e319723efcc4d4f9ca73";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Editbannerpart = () => {
  const [banner, setBanner] = useState({
    typewriter1: "",
    typewriter2: "",
    typewriter3: "",
    image1: "",
    image2: "",
    image3: "",
  });
  const [imageFiles, setImageFiles] = useState({}); // State to hold selected image files
  const { id } = useParams();

  // Fetch banner data
  useEffect(() => {
    fetch(`https://server.exportmark.com/getsbannerparts/${id}`)
      .then((res) => res.json())
      .then((data) => setBanner(data))
      .catch((error) => console.error("Error fetching banner:", error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBanner((prevBanner) => ({
      ...prevBanner,
      [name]: value,
    }));
  };

  // Handle image file selection for each image field
  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    setImageFiles((prevFiles) => ({ ...prevFiles, [fieldName]: file }));
  };

  // Upload image to imgbb and get the URL
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data?.data?.url) {
      return data.data.url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();

    let updatedBanner = { ...banner };

    // Upload images if new files are selected
    for (const [fieldName, file] of Object.entries(imageFiles)) {
      if (file) {
        try {
          const imageUrl = await uploadImage(file);
          updatedBanner[fieldName] = imageUrl;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Image Upload Failed",
            text: error.message,
          });
          return;
        }
      }
    }

    // Send the updated data to the server
    fetch(`https://server.exportmark.com/bannerdataupdates/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBanner),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Success",
            text: "Project updated successfully!",
          });
        }
      })
      .catch((error) => console.error("Error updating banner:", error));
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <Link to={-1}>
          <FaArrowLeft className="text-[#01c0c9] text-3xl cursor-pointer" />
        </Link>
        <h2 className="text-3xl font-semibold text-black mt-3">
          Update Home Project
        </h2>
      </div>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="typewriter1"
            value={banner.typewriter1}
            onChange={handleChange}
            placeholder="Typewriter 1"
            className="rounded-3xl px-3 py-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="typewriter2"
            value={banner.typewriter2}
            onChange={handleChange}
            placeholder="Typewriter 2"
            className="rounded-3xl px-3 py-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="typewriter3"
            value={banner.typewriter3}
            onChange={handleChange}
            placeholder="Typewriter 3"
            className="rounded-3xl px-3 py-2"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image 1</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleImageChange(e, "image1")}
            className="rounded-3xl"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image 2</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleImageChange(e, "image2")}
            className="rounded-3xl"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image 3</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleImageChange(e, "image3")}
            className="rounded-3xl"
          />
        </Form.Group>
        <Button
          type="submit"
          className="bg-[#01c0c9] text-white font-semibold px-4 py-2 rounded-3xl"
        >
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default Editbannerpart;

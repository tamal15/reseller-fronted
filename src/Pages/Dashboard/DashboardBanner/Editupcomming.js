import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, Button, Container } from "react-bootstrap";

const image_hosting_key = "9f07225b8047e319723efcc4d4f9ca73";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Editupcomming = () => {
  const [banner, setBanner] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
  });
  const [imageFiles, setImageFiles] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
  }); // State to hold selected image files
  const { id } = useParams();

  // Fetch banner data
  useEffect(() => {
    fetch(`https://server.exportmark.com/getsproductupcomming/${id}`)
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
  
    // Remove _id from updatedBanner before sending it to the database
    const { _id, ...bannerToUpdate } = updatedBanner;
  
    // Upload images if new files are selected
    for (const [fieldName, file] of Object.entries(imageFiles)) {
      if (file) {
        try {
          const imageUrl = await uploadImage(file);
          bannerToUpdate[fieldName] = imageUrl;
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
  
    // Send the updated data to the server without the _id field
    fetch(`https://server.exportmark.com/commingpartupdates/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bannerToUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Success",
            text: "Banner updated successfully!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: "No changes were made.",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "There was an error updating the banner.",
        });
        console.error("Error updating banner:", error);
      });
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
        {["image1", "image2", "image3", "image4", "image5", "image6"].map((imageField, index) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label>{`Image ${index + 1}`}</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => handleImageChange(e, imageField)}
              className="rounded-3xl"
            />
            {banner[imageField] && !imageFiles[imageField] && (
              <img
                src={banner[imageField]}
                alt={`Banner Image ${index + 1}`}
                style={{ width: "100px", height: "auto", marginTop: "10px" }}
              />
            )}
          </Form.Group>
        ))}
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

export default Editupcomming;

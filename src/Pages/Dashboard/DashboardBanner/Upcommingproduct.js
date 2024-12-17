import axios from "axios";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";

const Upcommingproduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://server.exportmark.com/getupcommings`
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://webi-bacend.onrender.com/homeprojectdelete/${id}`)
          .then((response) => {
            if (response.status === 204) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const updatedData = data.filter((d) => d._id !== id);
              setData(updatedData);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };

  return (
    <Container fluid>
      {!loading ? (
        <Row className="my-5">
          <Col>
            <div className="d-flex align-items-center mb-4">
              <h2 className="me-3">Project Features Part</h2>
            </div>
            <Table bordered hover responsive>
              <thead className="bg-light">
                <tr>
                 
                  <th>Image1</th>
                  <th>Image2</th>
                  <th>Image3</th>
                  <th>Image4</th>
                  <th>Image5</th>
                  <th>Image6</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               
                  <tr>
                   
                    <td>
                      <Image
                        src={data[0]?.image1}
                        alt="Banner"
                        rounded
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <Image
                        src={data[0]?.image2}
                        alt="Banner"
                        rounded
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <Image
                        src={data[0]?.image3}
                        alt="Banner"
                        rounded
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <Image
                        src={data[0]?.image4}
                        alt="Banner"
                        rounded
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <Image
                        src={data[0]?.image5}
                        alt="Banner"
                        rounded
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <Image
                         src={data[0]?.image6}
                        alt="Banner"
                        rounded
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <NavLink to={`/dashboard/editupcommingparts/${data[0]?._id}`}>
                          <Button variant="info" className="me-2">
                            <FaPencilAlt />
                          </Button>
                        </NavLink>
                       
                      </div>
                    </td>
                  </tr>
                
              </tbody>
            </Table>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p>Loading...</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Upcommingproduct;

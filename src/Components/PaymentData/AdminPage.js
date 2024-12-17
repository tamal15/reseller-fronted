import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Spinner, Alert } from 'react-bootstrap';

const AdminPage = () => {
  const [pendingUsers, setPendingUsers] = useState([]); // State to store fetched users
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        setLoading(true); // Set loading to true before fetch

        const response = await fetch('https://server.exportmark.com/usersdata/pending');

        // Check for response status
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        console.log('Fetched data:', data); // Debugging log

        // Validate if response is an array
        if (Array.isArray(data)) {
          setPendingUsers(data); // Update state with valid data
        } else {
          throw new Error('Invalid data format received from server.');
        }
      } catch (error) {
        console.error('Error fetching pending users:', error.message);
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPendingUsers();
  }, []);


  const handleVerify = async (email) => {
    try {
      await fetch(`https://server.exportmark.com/verify-payment/${email}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      });
      // Update local state after successful verification
      setPendingUsers(pendingUsers.filter(user => user.email !== email));
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };
  return (
    <Container>
      <h2 className="my-4">Admin Verification Page</h2>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}

      {/* Table Showing Pending Users */}
      {!loading && !error && pendingUsers.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Payment Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {pendingUsers.map((user) => (
    <tr key={user.email}>
      <td>{user.displayName || "N/A"}</td>
      <td>{user.email || "N/A"}</td>
      <td>
        {/* Safely handle bkashNumber */}
        {typeof user.bkashNumber === "string" ? user.bkashNumber : "N/A"}
      </td>
      <td>
      <Button
                    variant="success"
                    onClick={() => handleVerify(user.email)}
                  >
                    Verify
                  </Button>
      </td>
    </tr>
  ))}
</tbody>

        </Table>
      )}

      {/* No Data Message */}
      {!loading && !error && pendingUsers.length === 0 && (
        <p className="text-center">No pending users found.</p>
      )}
    </Container>
  );
};

export default AdminPage;

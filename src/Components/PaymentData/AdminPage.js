import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'; // Custom hook for authentication

const AdminPage = () => {
  const { user } = useAuth(); // Admin's info
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    // Fetch users awaiting verification
    const fetchPendingUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/usersdata/pending');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Ensure data is an array
        if (Array.isArray(data)) {
          setPendingUsers(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching pending users:', error);
      }
    };

    fetchPendingUsers();
  }, []);

  const handleVerify = async (email) => {
    try {
      await fetch(`http://localhost:5000/verify-payment/${email}`, {
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
          {pendingUsers?.length > 0 ? (
            pendingUsers?.map(user => (
              <tr key={user.email}>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.bkashNumber}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleVerify(user.email)}
                  >
                    Verify
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No pending users</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPage;

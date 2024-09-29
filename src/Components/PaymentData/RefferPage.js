import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const RefferPage = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch all users from the backend
        const response = await fetch('https://sellerportal.vercel.app/api/users');
        const data = await response.json();

        if (data && data.length > 0) {
          // Create a map to count occurrences of each refCode
          const refCodeCount = data.reduce((acc, user) => {
            acc[user.refCode] = (acc[user.refCode] || 0) + 1;
            return acc;
          }, {});

          // Filter users whose refCode appears more than once
          const matchedUsers = data.filter(
            user => refCodeCount[user.refCode] > 1 && user.status === 'verified'
          );

          setFilteredUsers(matchedUsers);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{marginLeft:"15px",marginRight:"15px"}}>
      <Typography variant="h4" gutterBottom>
        Referral Page
      </Typography>
      {filteredUsers.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Display Name</TableCell>
                <TableCell> Number</TableCell>
                <TableCell>RefCode</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map(user => (
                <TableRow key={user._id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.displayName}</TableCell>
                  <TableCell>{user.bkashNumber}</TableCell>
                  <TableCell>{user.refCode}</TableCell>
                  <TableCell>{user.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1">No users found with matching refCodes.</Typography>
      )}
    </div>
  );
};

export default RefferPage;

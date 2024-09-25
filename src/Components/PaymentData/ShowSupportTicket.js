import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Swal from 'sweetalert2';

const SupportTicketsList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/support-tickets');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleActionClick = (ticketId) => {
    Swal.fire({
      title: 'Action',
      text: `Perform action for ticket ID: ${ticketId}`,
      icon: 'info',
      confirmButtonText: 'OK',
    });
  };

  return (
    <Box sx={{ maxWidth: '95%', mx: 'auto', mt: 4, textAlign: 'left' }}>
      <Typography variant="h5" mb={2}>Support Tickets</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket._id}>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{new Date(ticket.date).toLocaleDateString()}</TableCell>
                <TableCell>{ticket.type}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleActionClick(ticket._id)}
                  >
                    Action
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SupportTicketsList;

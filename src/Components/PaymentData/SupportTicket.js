import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Swal from 'sweetalert2'; // Import SweetAlert2
import useAuth from '../../Hooks/useAuth';

const SupportTicketForm = () => {
  const { user } = useAuth();  // Fetch user from authentication hook
  const [formData, setFormData] = useState({
    subject: '',
    type: '',
    message: '',
    date: new Date().toLocaleDateString(),
    email: ''  // Email field
  });

  // Set email when user is loaded
  useEffect(() => {
    if (user?.email) {
      setFormData(prevData => ({ ...prevData, email: user.email }));
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Submit form data to backend API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      // Show error if email is missing
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'User email not found. Please log in.',
      });
      return;
    }

    try {
      const response = await fetch('https://server.exportmark.com/api/support-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Support ticket submitted successfully!',
        });

        // Reset the form fields after successful submission
        setFormData({
          subject: '',
          type: '',
          message: '',
          date: new Date().toLocaleDateString(),
          email: user?.email || ''  // Ensure email is retained
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to submit the support ticket. Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while submitting the support ticket.',
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 1223, mx: 'auto', mt: 4, textAlign: 'left' ,marginRight:"7px"}}>
      <Typography variant="h5" mb={2}>Create New Support Ticket</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Subject"
          name="subject"
          fullWidth
          variant="outlined"
          value={formData.subject}
          onChange={handleChange}
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <MenuItem value="website issue">Website Issue</MenuItem>
            <MenuItem value="feedback">Feedback</MenuItem>
            <MenuItem value="inquiry">Inquiry</MenuItem>
            <MenuItem value="complaint">Complaint</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SupportTicketForm;

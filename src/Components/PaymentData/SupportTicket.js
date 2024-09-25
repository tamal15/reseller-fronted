import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Swal from 'sweetalert2'; // Import SweetAlert2

const SupportTicketForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/support-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success message using SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Support ticket submitted successfully!',
        });

        // Optionally, reset the form fields after successful submission
        setFormData({ subject: '', type: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to submit the support ticket.',
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
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, textAlign: 'left' }}>
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

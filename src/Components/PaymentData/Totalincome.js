import { Box, Typography } from '@mui/material';
import React from 'react';

const Totalincome = ({ cart }) => {
    return (
        <Box>
            {cart?.map((single) => (
                <Box sx={{ pb: 3 }} key={single._id} >
                   <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> Price : </span>
                        {single?.totalIncome}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Totalincome;

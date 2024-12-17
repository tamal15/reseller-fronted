import React from 'react';
import { Typography, Box } from '@mui/material';
// import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Marquee from "react-fast-marquee";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Visit = () => {
    return (
        <Box sx={{ bgcolor: '#113350' }}>
            <Marquee direction='right'>
                <AddShoppingCartIcon sx={{ color: 'white' }} />
                <Typography> <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bold' }} href="https://docs.google.com/forms/d/e/1FAIpQLSfvFQyfZbgWwUW8GE8tM1vCa3-44nj1GlDtVRmoM1aaWlediA/viewform"
                >  ★ শুধুমাত্র ডেলিভারি চার্জ এডভান্স করতে হবে ( Dhaka city তে 60Tk এবং ঢাকা Dhaka city এর বাহিরে 120Tk ) ।এই নাম্বারে 01714191051  ডেলিভারি চার্জ সেন্ড মানি করুন(বিকাশ, নগদ, রকেট)।★   </a></Typography>
                <AddShoppingCartIcon sx={{ color: 'white' }} />
            </Marquee>


        </Box>
    );
};

export default Visit;
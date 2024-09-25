import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography,Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import './Service.css'
const ServiceCardWrap = (props) => {
    const { potterservice, classes } = props;
    console.log(props.potterservice)
    const targetRef = useRef();
    
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const divID = potterservice.categories?.split(" ").join("").toLowerCase();
    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: window.innerWidth <= 500 ? .3 : 1
        }
    }, [])


    useEffect(() => {
        // creating observer
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting)
        }, options)
        //init observer
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, options]);

    useEffect(() => {
        if (isVisible && divID !== location) {
            navigate(`/services/#${divID}`)

        }
    }, [isVisible, divID, navigate])
    return (
        <Box sx={{ pl: { xs: 2, md: 0 } }}>
        <div
        className=''
            id={divID}
            ref={targetRef}
            key={`${potterservice._id}${potterservice.categories}`}
            style={{ px: 2}}
            // className={classes.subServices}
        >
            <h6
            className='servicedesign'
                sx={{
                    pb: 2,
                    fontSize: "24px",
                    color: "rgba(0,0,0,.8)",
                    fontWeight: 600,
                    textAlign:"left",
                    // fontSize:"65px"
                }}
                // variant="h5"
                // gutterBottom
                // component="div"
            >
                {potterservice.categories}
            </h6>
            <Grid
                container
                // className={classes.gridMargin}
                spacing={3}
                style={{ marginBottom: "50px",
                marginTop: "50px",
                boxShadow: "none"}}
            >

                {potterservice.services?.map((item) => (
                    <ServiceCard key={item.Id}
                    item={item}
                    {...item} />
                ))}
            </Grid>
        </div>
    </Box>
    );
};

export default ServiceCardWrap;
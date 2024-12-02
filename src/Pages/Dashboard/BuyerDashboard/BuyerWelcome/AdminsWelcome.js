import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Box, Chip, Divider, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Swal from 'sweetalert2';
import axios from 'axios';
import CustomerAddress from '../../AdminDashboard/UpdateOrder/UserAddress';
import CartOrder from '../../AdminDashboard/UpdateOrder/UserBooking';

const AdminsWelcome = () => {
    const { user } = useAuth();
    const [ordering, setOrder] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [page, setPage] = useState(0);
    const [filterStatus, setFilterStatus] = useState('All'); 
    const [courierIds, setCourierIds] = useState({});
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        fetch(`https://server.exportmark.com/adminuserMy`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            });
    }, [user?.email]);

    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

    const handleUpdate = (id, newStatus) => {
        fetch(`https://server.exportmark.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((res) => res.json())
            .then((result) => {
                const updatedOrders = ordering.map(order =>
                    order._id === id ? { ...order, status: newStatus } : order
                );
                setOrder(updatedOrders);
                Swal.fire('Status Updated', 'Order status has been updated successfully!', 'success');
            });
    };

    const handleCourierChange = (e, orderId) => {
        setCourierIds({
            ...courierIds,
            [orderId]: e.target.value,
        });
    };

    const handleCourierUpdate = (id) => {
        const courierId = courierIds[id]; // Get the courier ID for this specific order
        if (!courierId) {
            Swal.fire('Error', 'Please enter a valid courier ID before updating.', 'error');
            return;
        }
        
        fetch(`https://server.exportmark.com/updateCourier/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ courier_id: courierId }),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire('Success', 'Courier ID has been updated successfully!', 'success');
            })
            .catch((error) => {
                console.error("Error updating courier ID:", error);
                Swal.fire('Error', 'Failed to update courier ID. Please try again later.', 'error');
            });
    };

    const handleUpdates = (id) => {
        const courierId = courierIds[id];
        fetch(`https://server.exportmark.com/updateCourier/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ courier_id: courierId }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('Courier ID updated');
    };

    const handleShowDetails = (order) => {
        setSelectedOrder(order);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://server.exportmark.com/manageAllOrderDelete/${id}`)
                    .then((response) => {
                        if (response.status === 200 || response.status === 204) {
                            Swal.fire(
                                'Deleted!',
                                'Order has been deleted.',
                                'success'
                            );
                            const updatedOrders = ordering.filter((d) => d._id !== id);
                            setOrder(updatedOrders);
                        } else {
                            Swal.fire('Failed!', 'Failed to delete the order. Please try again.', 'error');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire('Error!', 'An error occurred while deleting the order.', 'error');
                    });
            }
        });
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filteredOrders = filterStatus === 'All' ? ordering : ordering.filter(order => order.status === filterStatus);

    return (
        <div className='dashboard-welcome'>
            <Row>
                <Col md={6}>
                    <h2>Hello, <span style={{ color: "#46AADC" }} className='fs-1'>{user.displayName}</span></h2>
                    <p className='fs-4'>Welcome to <span style={{ color: "#46AADC", fontWeight: "700" }}>ADMIN</span></p>
                </Col>
                <Col md={6}>
                    <div className="dashboard-image">
                        <img src='https://i.ibb.co/Xsnkx3L/user.png' alt="user" />
                    </div>
                </Col>
            </Row>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }} onClick={() => handleFilterChange('cancelled')}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='body1'>Cancelled</Typography>
                                <IconButton sx={{ background: 'hsl(215deg 69% 90%)', color: 'hsl(215deg 70% 71%)' }}>
                                    <DirectionsCarIcon />
                                </IconButton>
                            </Box>
                            <h5 style={{ textAlign: "left", marginTop: "8px" }}>{ordering.filter(order => order.status === 'cancelled').length}</h5>
                            <h5 className='mt-3' style={{ textAlign: "left" }}>Order <span style={{ color: "red" }}>Cancelled</span></h5>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }} onClick={() => handleFilterChange('Pending')}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='body1'>Pending</Typography>
                                <IconButton sx={{ background: 'hsl(215deg 69% 90%)', color: 'hsl(215deg 70% 71%)' }}>
                                    <AttachMoneyIcon />
                                </IconButton>
                            </Box>
                            <h5 style={{ textAlign: "left", marginTop: "8px" }}>{ordering.filter(order => order.status === 'Pending').length}</h5>
                            <h5 className='mt-3' style={{ textAlign: "left" }}>Order <span style={{ color: "red" }}>Pending</span></h5>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }} onClick={() => handleFilterChange('given-to-delivery')}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='body1'>Given-To-Delivery</Typography>
                                <IconButton sx={{ background: 'hsl(215deg 69% 90%)', color: 'hsl(215deg 70% 71%)' }}>
                                    <HomeRepairServiceIcon />
                                </IconButton>
                            </Box>
                            <h5 style={{ textAlign: "left", marginTop: "8px" }}>{ordering.filter(order => order.status === 'given-to-delivery').length}</h5>
                            <h5 className='mt-3' style={{ textAlign: "left" }}>Order <span style={{ color: "red" }}>Given-To-Delivery</span></h5>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }} onClick={() => handleFilterChange('completed')}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='body1'>Completed</Typography>
                                <IconButton sx={{ background: 'hsl(215deg 69% 90%)', color: 'hsl(215deg 70% 71%)' }}>
                                    <LocalGroceryStoreIcon />
                                </IconButton>
                            </Box>
                            <h5 style={{ textAlign: "left", marginTop: "8px" }}>{ordering.filter(order => order.status === 'completed').length}</h5>
                            <h5 className='mt-3' style={{ textAlign: "left" }}>Order <span style={{ color: "red" }}>Completed</span></h5>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }} onClick={() => handleFilterChange('approved')}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='body1'>Approved</Typography>
                                <IconButton sx={{ background: 'hsl(215deg 69% 90%)', color: 'hsl(215deg 70% 71%)' }}>
                                    <LocalGroceryStoreIcon />
                                </IconButton>
                            </Box>
                            <h5 style={{ textAlign: "left", marginTop: "8px" }}>{ordering.filter(order => order.status === 'approved').length}</h5>
                            <h5 className='mt-3' style={{ textAlign: "left" }}>Order <span style={{ color: "red" }}>Approved</span></h5>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }} onClick={() => handleFilterChange('return')}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Typography variant='body1'>Return</Typography>
                                <IconButton sx={{ background: 'hsl(215deg 69% 90%)', color: 'hsl(215deg 70% 71%)' }}>
                                    <LocalGroceryStoreIcon />
                                </IconButton>
                            </Box>
                            <h5 style={{ textAlign: "left", marginTop: "8px" }}>{ordering.filter(order => order.status === 'return').length}</h5>
                            <h5 className='mt-3' style={{ textAlign: "left" }}>Order <span style={{ color: "red" }}>Return</span></h5>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            <Box mt={3}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer</TableCell>
                                <TableCell>TotalPrice</TableCell>
                                <TableCell>Payment</TableCell>
                                <TableCell>Wallet</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Courier</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell>{order.cus_name}</TableCell>
                                    <TableCell>{order.total_amount}</TableCell>
                                    <TableCell>{order.payment_number}</TableCell>
                                    <TableCell>{order.wallet_amount}</TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" justifyContent="space-between">
                                            <select
                                                onChange={(e) => handleUpdate(order._id, e.target.value)}
                                                value={order.status}
                                                className="pending p-2"
                                                style={{ border: "2px solid #113350", borderRadius: "5px" }}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="approved">Approved</option>
                                                <option value="cancelled">Cancelled</option>
                                                <option value="completed">Completed</option>
                                                <option value="given-to-delivery">Given-To-Delivery</option>
                                            </select>
                                            <IconButton onClick={() => handleUpdate(order._id, order.status)} color="primary">
                                                {/* <InfoIcon /> */}
                                            </IconButton>
                                        </Box>
                                    </TableCell>

                                    <TableCell>
    <Box display="flex" alignItems="center" justifyContent="space-between">
        <input
            type="text"
            style={{ textAlign: "left", flexGrow: 1 ,width:"120px",border:"2px solid #113350",borderRadius:"5px"}} // Adjust input field size
            value={courierIds[order._id] || ''} // Remove fallback to order.courier_id
            onChange={(e) => handleCourierChange(e, order._id)}
            placeholder={order.courier_id || "Enter Courier ID"}
        />
        <IconButton onClick={() => handleUpdates(order._id)} color="primary">
            <InfoIcon /> {/* You can replace InfoIcon with an appropriate update icon */}
        </IconButton>
    </Box>
</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleShowDetails(order)} color="primary">
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(order._id)} color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40]}
                        component="div"
                        count={ordering.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Box>

            {selectedOrder && (
                <Box mt={3}>
                    <Divider>
                        <Chip label="Order Details" />
                    </Divider>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CustomerAddress order={selectedOrder} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CartOrder cart={selectedOrder.cartProducts} />
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
};

export default AdminsWelcome;

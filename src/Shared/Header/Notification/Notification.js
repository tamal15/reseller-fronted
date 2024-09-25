import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Container,
    CardContent,
    CardActionArea,
    Card,
    Grid,
    Modal,
    TextField,
    Popover,
    Badge,
  } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';
import NotificationCard from './NotificationCard';

const Notification = () => {
    const [messageSeen, setMessageSeen] = useState(0);
    const [isMessageSeen, setIsMessageSeen] = useState(false);
    // const [notifications, setnotifications] = useState(false);
    const {user}=useAuth();
    // const [anchorElUser, setAnchorElUser] =useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const dispatch = useDispatch();
    const open2 = Boolean(anchorEl);
    const id = open2 ? "simple-popover" : undefined;

     // let MessageSeen;
  useEffect(() => {
    const filterMessage = notifications.filter(
      (notification) => notification.seen === false
    );

    setMessageSeen(filterMessage.length);
  }, [notifications, user]);

  const handleClickClose = () => {
    setAnchorEl(null);
  };
   // message status change

   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(updateMessageStatus(user));
    setIsMessageSeen(true);
    setMessageSeen(0);
  };

  // setSearchValue("Hello world")
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
    return (
        
<>

{user?.email && (
              <>
                <>
                  <Button
                    aria-describedby={id}
                    variant=""
                    onClick={handleClick}
                  >
                    {messageSeen > 0 ? (
                      <Badge badgeContent={messageSeen} color="primary">
                        <NotificationsNoneIcon
                          className="svg_icons"
                          color="action"
                        ></NotificationsNoneIcon>
                      </Badge>
                    ) : (
                      <NotificationsNoneIcon
                        className="svg_icons"
                        color="action"
                      ></NotificationsNoneIcon>
                    )}
                  </Button>

                  <Popover
                    sx={{ borderRadius: 5 }}
                    id={id}
                    open={open2}
                    anchorEl={anchorEl}
                    onClose={handleClickClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Box
                      sx={{
                        width: "300px",
                        height: "300px",
                        borderRadius: 5,
                        p: 2,
                      }}
                    >
                      {notifications.map((notification) => <NotificationCard notification={notification}></NotificationCard>)}
                    </Box>
                  </Popover>
                </>
                <Tooltip arrow title="My Account">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                  </IconButton>
                </Tooltip>
              </>
            )}
        
</>

            
        
    );
};

export default Notification;
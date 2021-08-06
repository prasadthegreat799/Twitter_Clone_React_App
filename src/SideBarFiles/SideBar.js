import React from 'react';
import './SideBar.css';
import SideBarOptions from './SideBarOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

function SideBar() {
    return (
    
        <div className="sidebar">

            <SideBarOptions active Icon={HomeIcon} text="Home"/>
            <SideBarOptions  Icon={SearchIcon} text="Explore"/>
            <SideBarOptions  Icon={NotificationsIcon} text="Notifications"/>
            <SideBarOptions  Icon={MailOutlineIcon} text="Messages"/>
            <SideBarOptions  Icon={BookmarksOutlinedIcon} text="Bookmarks"/>
            <SideBarOptions  Icon={ListAltOutlinedIcon} text="Explore"/>
            <SideBarOptions  Icon={PersonOutlineOutlinedIcon} text="Profile"/>
            <SideBarOptions  Icon={MoreHorizOutlinedIcon} text="More"/>
           
           
        </div>
    )


}

export default SideBar

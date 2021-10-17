import { ExpandMoreOutlined } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src ='' title = "Sanjeiv Krish"/>
            <SidebarRow Icon = {PeopleIcon} title = "Friends"/>
            <SidebarRow Icon = {ChatIcon} title = "Messaging"/>
            <SidebarRow Icon = {BookmarksIcon} title = "Saved"/>
            <SidebarRow Icon = {StorefrontIcon} title = "Market"/>
            <SidebarRow Icon = {InfoIcon} title = "Information"/>
            <SidebarRow Icon = {ExpandMoreOutlined} title = "More"/>
        </div>
    )
}

export default Sidebar

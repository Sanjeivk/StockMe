import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
                <img
                    src="https://www.bioworld.com/ext/resources/Stock-images/Money/stock-prices-up.png?1588794938"
                    alt=""
                />

                <div className = "header__input">
                    <SearchIcon />
                    <input placeholder='Search StockMe' type = "text" />
                </div>
            </div>

            <div className = "header__center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize = "large" />
                </div>
                <div className="header__option">
                    <PieChartIcon fontSize = "large" />
                </div>
                <div className="header__option">
                    <ShowChartIcon fontSize = "large" />
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize = "large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div>
            </div>

            <div className = "header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>SKrish</h4>

                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Header


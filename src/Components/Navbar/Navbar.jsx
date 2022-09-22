import React from 'react'
import '../Navbar.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    return (
        <div className='nav'>
            <div className="left-container">
                <img className='nav-main-icon' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <div className="nav-btn-group">

                    <p className='nav-btn'>Home</p>
                    <p className='nav-btn'>Tv programmes</p>
                    <p className='nav-btn'>Filims</p>
                    <p className='nav-btn'>Recently added</p>
                    <p className='nav-btn'>My List</p>
                </div>

            </div>

            <div className="right-container">
                <SearchIcon />
                <NotificationsIcon />
                <p>KIDS</p>
                <img className='user-icon' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png" alt="" />
                <ArrowDropDownIcon />
            </div>
        </div >


    )
}


export default Navbar;

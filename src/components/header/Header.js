import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img
                className='header__logo' 
                src={"https://e7.pngegg.com/pngimages/884/17/png-clipart-tinder-logo-online-dating-applications-tinder-logo-orange-logo.png"} alt="" 
            />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
        </div>
    )
}

export default Header
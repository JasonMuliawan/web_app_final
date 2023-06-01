import React from 'react';
import "./Header.css";
import { useAuth } from '../../../useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
    const {loggedIn} = useAuth();
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/account")
    }

    const loggedInName = () => (
        <div>{loggedIn}</div>
    )
    const notLoggedInButton = () => (
        <div onClick={handleRegister}>註冊</div>
    )
    return (
        <div className="header">
            <div className="logo-x">綠山行動</div>
            
            <div className="register">
                {loggedIn==="" ? notLoggedInButton() : loggedInName()}
            </div>
        </div>
    );
}

export default Header;

import React from "react";
import Button from "../Button/Button.jsx";
import { useTelegram } from "../../hooks/useTelegram.js";
import './Header.css'

const Header = () => {
    const {user, onClose} = useTelegram()
    
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.first_name}
            </span>
        </div>
    )
}

export default Header
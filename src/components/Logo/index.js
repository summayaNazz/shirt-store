import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
            <div className="Logo" {...props}>
                <span><img src={require('./image/baali-logo.jpg')} width='130px' height='50px' /></span>
                {/* <span>B@li Store</span> */}
            </div>
        </Link>
        
    );
}

export default Logo;
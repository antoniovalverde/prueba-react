import React from 'react';
import './Header.css';

const Header = ({ onRouteChange }) => {
    return (
        <div className='cabecera'>
            <div className='container1'>
                <div className='titulo'>
                    <h1 className='demoTitle' onClick={() => onRouteChange('home')}>DEMO Streaming</h1>
                </div>
                <div className='part2'>
                    <div className='btn1'>
                        <span className='enabled'>Log In</span>
                    </div>
                    <div className='btn2'>
                        <span className='disabled'>Start your free trial</span>
                    </div>
                </div>
            </div>
            <div className='container2'>
                <div className='titulo2'>
                    <h2>Popular Titles</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
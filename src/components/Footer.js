import React from 'react';
import './Footer.css';
import logofb from '../social/facebook-white.svg';
import logotw from '../social/twitter-white.svg';
import logoin from '../social/instagram-white.svg';
import logoae from '../store/app-store.svg';
import logogp from '../store/play-store.svg';
import logomi from '../store/windows-store.svg';

const Footer = () => {
    return (
        <div className='pie'>
            <div className='atajos'>
                Home | Terms and Conditions | Privacy Policy | Collections Statement | Help | Manage Account
            </div>
            <div className='copyright'>
                Copyright © 2016 DEMO Streaming. All Rights Reserved.
            </div>
            <div className='imagenes'>
                <div className='imagenes1'>
                    <img src ={ logofb } alt='Logo Facebook'/>
                    <img src ={ logotw } alt='Logo Twiter'/>
                    <img src ={ logoin } alt='Logo Instagram'/>
                </div>
                <div className='imagenes2'>
                    <img src ={ logoae } alt='Logo App Store'/>
                    <img src ={ logogp } alt='Logo Play Store'/>
                    <img src ={ logomi } alt='Logo Windows Store'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
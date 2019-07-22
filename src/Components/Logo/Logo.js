import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import joon from './CMRLOGI.jpg';


const Logo = () => {
	return (
		<div className='mine'>
			<Tilt className="Tilt br2 shadow-5" options={{ max : 85 }} style={{ height: 70, width: 100 }} >
			 	<img className='im'  src={joon} alt='brainLogo'/>
			</Tilt>	
		</div>
		);
}

export default Logo;
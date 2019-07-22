import React from 'react';
import './Horizontalnav.css'

const Horizontalnav = ({onLogOut}) => {
	return(
		<div className='hori-nav'>
			<p id="hn" onClick = { ()=> onLogOut() } >Logout</p>
			<p id="hn" >Account</p>
		</div>
			
		
		);
}

export default Horizontalnav;

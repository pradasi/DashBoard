import React from 'react';
import './Sidenav.css';
import * as FontAwesome from 'react-icons/fa';
import BackGround from './BG.jpg';


const Sidenav = ({onRouteChange,onFetch}) => {
	return(
			<div className='sidecontent'>
				<div className='wrapper'>
					<img src={BackGround} alt='Background' className='image'/>
					 <p onClick={()=> onRouteChange('home')}><FontAwesome.FaHome className='demo'/><span  className='text'>HOME</span></p>
					 <p onClick={()=> onRouteChange('scheduler')}><FontAwesome.FaHome className='demo'/><span  className='text'>SCHEDULER</span></p> 
					 <p onClick={()=> onRouteChange('predict')}   ><FontAwesome.FaList className='demo'/><span className='text'>PREDICT</span></p>  
					 <p onClick={()=> onRouteChange('profile')} ><FontAwesome.FaUser className='demo'/><span  className='text'>PROFILE</span></p> 
					 <p onClick={()=> onRouteChange('feedback')} ><FontAwesome.FaMapMarker className='demo' /><span  className='text'>FEEDBACK</span></p>
					 <p onClick={()=> onRouteChange('map')}><FontAwesome.FaHome className='demo'/><span  className='text'>MAP</span></p> 
				</div>
			</div>					
		);
}

export default Sidenav;
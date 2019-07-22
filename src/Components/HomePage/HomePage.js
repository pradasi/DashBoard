import React from 'react';
import './HomePage.css';
import h12 from './images/h12.jpg' ;
import b1 from  './images/handicraft4.jpg' ;
import b2 from './images/handicraft2.jpg';
import b3 from './images/handi6.jpg' ;
import b4 from './images/basket.jpg' ;
import b5 from './images/h11b.jpg' ;
const HomePage =({onRoot})=>{
	

		return (
            
            <div>
        
                <div><img src={h12} id='im1' />
                    
                    <div className="topnav">
                    <a  className='title'>GOONJ</a>
									  <a className='det'>Info</a>
									  <a className='det' >About</a>
									  <a className='det' >Home</a>
</div>
                   
        <div class="ptext">
               
                <span class="border trans" style={{paddingleft: 75}} >Be The Change...</span><br/><br />
                <p style={{fontFamily: 'cursive',
            fontSize: 28 ,textTransform:'none',
            color: 'white' ,letterSpacing: 3 }}>Come forward to make a difference in the Society </p>
            <p class="border-white"> <a style={{textDecoration: 'none' ,color: 'white' ,cursor: 'pointer'}} onClick={()=> onRoot()}>Get started</a> </p>
        </div>
            
    </div>
    <br/><br/>
    <div class="container-fluid">
 

  <div class="row">
      <div class="col-sm-8" ><img src={b1} style={{width:900,height:400}}  id="bgimg"></img> <div class="ptext" style={{fontSize:30,letterSpacing:3, color: 'white',paddingRight: 70}}><span >Handicraft</span>
        </div></div>
      
    <div class="col-sm-4" ><img src={b2}  height="400px" width="100%" id="bgimg"/><div class="ptext" style={{fontSize:30,letterSpacing:13,color: 'white'}}><span>Stiching </span></div></div>
  </div>
        <br/><br/>
   <div class="row">
       <div class="col-sm-4" ><img src={b3}  height="400px" width="100%" id="bgimg"></img><div class="ptext" style={{fontSize:30,letterSpacing:13, color: 'white'}}><span >Pottery</span></div></div>
    <div class="col-sm-8" ><img src={b4}  height="400px" width="100%" id="bgimg" /><div class="ptext" style={{fontSize:30,letterSpacing:13, color: 'white'}}><span >HandMade Baskets</span></div></div>
  </div> 
</div>
    <br/><br/><br/>
    
    <div class="aboutus"><br/><br/>
        <span style={{paddingLeft: 460 ,paddingTop: 225,marginTop: 600, textTransform:'uppercase' ,letterSpacing: 2,fontSize: 28, color: 'white' , fontFamily: 'serif' }}>About us</span><br/>
     <p style={{fontFamily: 'serif',
            fontSize: 20 ,textTransform:'none',color: 'white' ,letterSpacing: 3 ,paddingLeft: 50,paddingTop: 40,fontWeight: 100}}>Goonj is a non profit organisation which helps in bring a change in the society.Through this Webpage you can raise different issues in our society and ways to overcome them  </p>
    <p class="border-white" id="border2" id="rand" > Explore More </p>
    </div>
        <img src={b5} class="img5"></img>
            
            
            </div>
			
		);

	
	
}


export default HomePage

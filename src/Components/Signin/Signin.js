import React from 'react';
import './Signin.css';
import background from './bg_1.jpg';


class Signin extends React.Component  {

	constructor(props){
		super(props);
		this.state = {

					signInEmail: '',
					signInPassword: ''
		}
	}

	handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    	this.props.onLogIn(true);
    }
  }

	onEmailChange = (event)=>{
		this.setState({signInEmail: event.target.value})
	}


	onPasswordChange = (event)=>{
		this.setState({signInPassword: event.target.value})
	}

	
	/*onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
      .then(user => {
        if(user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
			}
		})
		
	}*/


	render(){
		var {onLogIn} = this.props;
		return (
			<div>
				<div style={{overflowX: "hidden"}}>
				<div className="square">
  			</div>
				<div style={{margin: 0}}>
					<div className="trapezoid">
					</div>
				</div>
				<img src={background} alt='Background' className='img'/>
			 	<div className="LoginBox">
			  	<h1>Log In Here</h1>
			    <form>  
			      <p>Email</p>
			      <input 
			      	type="text" 
			      	name="email" 
			      	placeholder="Enter Email ID"
			      />
			      <p>Password</p>
			      <input 
			      	type="Password" 
			      	name="password" 
			      	placeholder="Password"
			      	onChange = {this.onPasswordChange}
					    onKeyDown={this.handleKeyDown}
			      />
			      <br/><br/>
			      <input 
			      	type="submit" 
			      	name="login"
			      	onClick={ () => onLogIn(true)}
			      />       
			    </form>
			  </div>
			  </div>
			</div>
			
		);

	}
	
}


export default Signin

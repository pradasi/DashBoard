import React, { Component} from 'react';
import './App.css';
import Sidenav from './Components/Sidenav/Sidenav';
import Logo from './Components/Logo/Logo';
import Scroll from './Components/Scroll/Scroll';
import Horizontalnav from './Components/HorizontalNav/HorizontalNav';
import Predictor from './Components/Predictor/Predictor';
import Signin from './Components/Signin/Signin';
import Home from './Components/Home/Home';
import Feedback from './Components/Feedback/Feedback';
import Scheduler from './Components/Scheduler/Scheduler';
import Map from './Components/Map/Map';
import HomePage from './Components/HomePage/HomePage';

const initial = {
			isLoggedIn: false,
      page: 'home',
      xv: 'HOME'
    }
class App extends Component {
	constructor(){
		super();
		this.state = initial
	}

	onRoot =() =>{
		this.setState({xv: 'hm'})
	}

	onLogIn = (log) => {
		 this.setState({isLoggedIn: log })		
		 console.log(this.state.isLoggedIn)

	}
	onLogOut = () =>{
		this.setState(initial)
	}
	onRouteChange = (route) =>{
    this.setState({page: route })
  }

 
	render() {

		let display;
		switch(this.state.page){
			case 'home':
				display = <Home/>;
				break;
			case 'predict':
				display = <Predictor/>;
				break;
			case 'feedback':
				display = <Feedback/>;
				break;
			case 'scheduler':
				display = <Scheduler/>;
				break;
			case 'map':
				display = <Map/>;
				break;
			default :
				display = <Home/>;
				break;
		}
		
		return(
			<div>
			{ this.state.isLoggedIn === true
				? <div className='main'>
					<div className='rightBlock'>
						<Logo/>
						<Sidenav onRouteChange={this.onRouteChange}/>
					</div>
					<div className='leftBlock'>
					 
						<Horizontalnav onLogOut={this.onLogOut} />
						<div className='leftBody'> 
							<Scroll>
								
								{display}
								
							</Scroll>
					
					</div>
					</div>
					</div>
				: ( this.state.xv === 'hm'
						? <Signin onLogIn={this.onLogIn}/>
						: <HomePage onRoot={this.onRoot}/>

					) 
					
				
			}
			</div>		
		);
	}
}

export default App;

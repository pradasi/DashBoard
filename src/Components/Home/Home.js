import React, { Component} from 'react';
import './Home.css'
import { Chart } from "react-google-charts";


class Home extends Component {
	constructor(){
		super();
		this.state = {
			Data: null
      
   	}
	}

	componentWillMount() {
		fetch('http://localhost:3000/home', {
			method: 'get',
			headers: {'Content-Type': 'application/json' }
		})
		.then(response => response.json())
		.then(data =>{
			this.setState({Data: data})
		})
		.catch(err =>{
			console.log(err)
		})
		
	}
    


	render() {
		return (
			<div className="chart-container">
				
				<div className="left-chart">
					<div className="box">
						<Chart 
							className='chr'
							width={'800px'}
						  height={'500px'}
						  chartType="Line"
						  loader={<div>Loading Chart</div>}
						  data={this.state.Data}
						  options={{
						    chart: {
						      title: 'Company Sales so far',
						    },
						  }}
						  rootProps={{ 'data-testid': '3' }}
						/>
					</div>
				</div>
			</div>
		);
	}
}


export default Home
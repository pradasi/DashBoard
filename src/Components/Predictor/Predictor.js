import React, { Component} from 'react';
import './Predictor.css';
import { Chart } from "react-google-charts";
class Predictor extends Component {
	constructor(){
		super()
		this.state = {
			input: '',
			value: ['','']

		}
	}
	/*componentWillMount() {
		this.setState({value: [' ',' ']});
		this.setState({input: ' '});


	}*/

	onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonClick = () =>{
  	fetch('http://localhost:3000/predict', {
			method: 'put',
			headers: {'Content-Type': 'application/json' },
			body: JSON.stringify({
				predict: this.state.input
			})
		})
		.then(response => response.json())
		.then(data =>{
			this.setState({value: data})
		})
		.catch(err =>{
			console.log(err)
		})
  }
	render() {
		return (
		<div className='tc '>
			<p className='f3 b black'>
				Enter The Number of Months to Predict
			</p>
			<div className='input-box'>
				<div className='pa2 br3 shadow-10 form'>
				<input className='f4 pa2 br3 b black center w-70' type='text' onChange={this.onInputChange} />
				<button className='w-30 grow link br3 f4 ph3 pv2 dib bg-white pointer' onClick={this.onButtonClick}> DETECT </button>
				</div>
			</div>
			{
				this.state.value === []
				? <div></div>
				: <Chart 
				className='chrx'
				width={'600px'}
			  height={'500px'}
			  chartType="Line"
			  data={this.state.value}
			  options={{
			    chart: {
			      title: `Future Prediction for ${this.state.input} Months is `,
			    },
			  }}
			  rootProps={{ 'data-testid': '3' }}
			/>
			

			}
		</div>
		);

	}
	
}


export default Predictor;

//className='pa4 br3 shadow-10 form'
import React from 'react';
import './Feedback.css';


const FeedBack = () => {
  
  return (
  	<div className='feed'>
    	<h3 className='heading'>FeedBack Form </h3>
       <p>is the product was deliverd on time </p>
       <input type="text" placeholder="" required></input> 
       <p>is the task divided properly </p>
			<table className='table'>
				<tr>
					<th></th>
					<th>Very Satisfied</th>
					<th>Satisfied</th>
					<th>Neutral</th>
					<th>UnSatisfied</th>
					<th>Very UnSatisfied</th> 
				</tr>
				<tr>
					<td>Location</td>
					<td> <input type="radio" name="gender" value="male" checked></input></td>
					<td><input type="radio" name="gender" value="female"></input> </td>
					<td><input type="radio" name="gender" value="female"></input> </td>
					<td><input type="radio" name="gender" value="female"></input> </td>
					<td><input type="radio" name="gender" value="female"></input> </td>
				</tr>
				<tr>
					<td>Price</td>
					<td> <input type="radio" name="gender" value="male" checked></input></td>
					<td><input type="radio" name="gender" value="female"></input> </td>
					<td><input type="radio" name="gender" value="female"></input> </td>
					<td><input type="radio" name="gender" value="female"></input> </td>
					<td><input type="radio" name="gender" value="female"></input> </td>
				</tr>
			</table>

			<p> overall service experience </p>
			<input type="text" placeholder="" required></input>   

			<p>How can we imporve it Write your comments </p>
			<br/>
			<br/>
			<input type="submit" name="submit"></input>
  	</div>
    
  );
  
}

export default FeedBack;


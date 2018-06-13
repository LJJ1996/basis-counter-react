import React , {Component} from 'react';
import styles from './Counter.css'
class Counter extends Component {
	constructor(props){
		super(props);

		this.state = {
			num:this.props.initValue || 0
		};
		// this.onIncrement = this.onIncrement.bind(this);
		// this.onDecrement = this.onDecrement.bind(this);
	}

	onIncrement = () => {
		this.setState({
			num : this.state.num + 1
		})
	};

	onDecrement = () => {
		this.setState({
			num : this.state.num - 1
		})
	};

	// onIncrement(){
	// 	this.setState({
	// 		num : this.state.num + 1
	// 	})
	// }
	//
	// onDecrement(){
	// 	this.setState({
	// 		num : this.state.num - 1
	// 	})
	// }


	render(){
		const {caption} = this.props;
		return (
				<div>
					<button onClick = {this.onDecrement}> Click to -1 </button>
					<span> {caption} : {this.state.num} </span>
					<button onClick = {this.onIncrement}> Click to +1 </button>
				</div>
			)

	}
}

export default Counter;

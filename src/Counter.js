import React , {Component} from 'react';
import './Counter.css'
class Counter extends Component {
	constructor(props){
		super(props);

		this.state = {
			num:this.props.initValue || 0
		};
		console.log("enter constructor : " + this.props.caption);
	}

	componentWillMount(){
		console.log("enter componentWillMount : " + this.props.caption);
	}

	componentDidMount(){
		console.log("enter componentDidMount : " + this.props.caption);
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

	render(){
		console.log("enter render : " + this.props.caption);
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

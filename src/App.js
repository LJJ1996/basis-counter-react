import React , {Component} from 'react'
import Counter from './Counter'
class App extends Component {

	render(){
		console.log("enter App render");
		return (
			<div>
				<Counter caption = "First Counter" initValue = {0} />
				<Counter caption = "Second Counter" initValue = {10} />
				<Counter caption = "Third Counter" initValue = {20} />
				<button onClick = {() => this.forceUpdate()}>Click me to repaint!</button>

			</div>
		)
	}
}

export default App;
import React , {Component} from 'react'
import Counter from './Counter'
class App extends Component {

	render(){

		return (
			<div>
				<Counter caption = "First Counter" initValue = {0} />
				<Counter caption = "Second Counter" initValue = {10} />
				<Counter caption = "Third Counter" initValue = {20} />
			</div>
		)
	}
}

export default App;
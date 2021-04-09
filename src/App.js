import './App.css';
import FetchUsers from './components/FetchUsers';
import User from './components/User';
import Repos from './components/Repos';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={FetchUsers} />
					<Route exact path='/user/:id' component={User} />
					<Route exact path='/user/:id/repos' component={Repos} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import './App.css';
import Console from './pages/Console';
import Home from './pages/Home';

class App extends Component {

	render() {
		return (
			<div >
			<Router>
			<Routes>
				<Route exact path='/' exact element={<Home/>} />
				<Route path='/Console' element={<Console/>} />
			</Routes>
			</Router>
			</div>
		);
		
	}
}

export default App;
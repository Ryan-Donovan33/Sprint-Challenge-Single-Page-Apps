import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';
import CharacterCard from './components/CharacterCard.js';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList.js';

export default function App() {
	const [ charac, setCharac ] = useState([]);

	// TODO: Add API Request here - must run in `useEffect`
	//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

	useEffect(() => {
		Axios.get('https://rickandmortyapi.com/api/character/')
			.then((res) => setCharac(res.data.results))
			.catch((err) => console.log(err));
	}, []);
	console.log(charac);

	return (
		<main>
			<Header />
			<Route path="/" exact>
				<WelcomePage charac={charac} setCharac={setCharac} />
			</Route>

			<Route path="/character-list">
				<CharacterList charac={charac} setCharac={setCharac} />
			</Route>

			{/* <Route path="/characters/:id" render={(props) => <CharacterList {...props} charac={charac} />} /> */}
		</main>
	);
}

import React from 'react';
import Card from './Card';
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import CharacterList from './CharacterList';

export default function WelcomePage(props) {
	const router = (e) => {
		e.preventDefault();
		props.history.push('/character-list');
	};
	return (
		<section className="welcome-page">
			<header>
				<h1>Welcome to the ultimate fan site!</h1>
				<img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
				<Route>
					<SearchForm />
				</Route>
				<CharacterList />
				<button onClick={router}> Character List</button>
			</header>
		</section>
	);
}

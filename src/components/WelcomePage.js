import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import styled from 'styled-components';

const Sect = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Head = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function WelcomePage(props) {
	// const router = (e) => {
	// 	e.preventDefault();
	// 	props.history.push('/character-list');
	// };
	return (
		<Sect>
			<Head>
				<h1>Welcome to the ultimate fan site!</h1>
				<img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
				<Route>
					<CharacterList />
				</Route>
			</Head>
		</Sect>
	);
}

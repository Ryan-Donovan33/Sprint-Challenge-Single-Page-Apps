import React from 'react';

function CharacterCard({ charac }) {
	if (!charac) {
		return <h2>Loading...</h2>;
	}
	return (
		<div>
			<p>Name: {charac.name}</p>
			<p>Status: {charac.status}</p>
			<p>Gender: {charac.gender}</p>
		</div>
	);
}

export default CharacterCard;

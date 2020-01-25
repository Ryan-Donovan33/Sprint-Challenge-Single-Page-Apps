import React from 'react';

function CharacterCard({ charac }) {
	if (!charac) {
		return <h2>Loading...</h2>;
	}
	return (
		<div>
			<p>{charac.id}</p>
			<p>{charac.name}</p>
			<p>{charac.status}</p>
			<p>{charac.gender}</p>
		</div>
	);
}

export default CharacterCard;

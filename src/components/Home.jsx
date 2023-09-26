import React from 'react';
import Movies from './Movies';
import styled from 'styled-components';

const MovieList = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 12px;
	min-width: 800px;

	@media screen and (max-width: 760px) {
		min-width: 760px;
	}
`;

const Home = () => {
	return (
		<MovieList>
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
			<Movies />
		</MovieList>
	);
};

export default Home;

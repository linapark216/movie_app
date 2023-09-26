import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
	const [movies, setMovies] = useState([]);

	const newDate = new Date();
	const year = newDate.getFullYear().toString();
	let month = (newDate.getMonth() + 1).toString();
	if (month < 10) {
		month = '0' + month;
	}
	const date = '01';
	const releaseDts = year + month + date;
	console.log(releaseDts);

	const url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&nation=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD&releaseDts=${releaseDts}&detail=Y&ServiceKey=852Y82BA7VQLZ568227M`;

	const getMovies = () => {
		fetch(url)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				const movies = data.Data[0].Result;
				// console.log(movies);
				setMovies(movies);
			});
	};

	useEffect(() => {
		getMovies();
	}, []);

	const movieList = movies.map((movie) => {
		return movie.title;
	});
	console.log(movieList);

	return (
		<div>
			<h1>홈화면</h1>
		</div>
	);
};

export default Home;

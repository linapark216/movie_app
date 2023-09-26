import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';
import bgimg from './asset/header_z200.png';
import logo from './asset/logo_z300.png';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	height: 80px;
	margin: 0 auto;
	background-color: #445d7f;
	background-image: url(${bgimg});
	background-repeat: no-repeat;
	background-size: 100% 80px;
	> h1 {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: absolute;
		left: 10px;
		top: 15px;
		width: 200px;
		height: 48px;
		font-weight: 700;
		background-image: url(${logo});
		background-repeat: no-repeat;
	}
`;
const Today = styled.p`
	height: 80px;
	line-height: 80px;
	margin-right: 20px;
	color: #fff;
	font-size: 24px;
	font-weight: 600;
`;
const Header = () => {
	const newDate = new Date();
	const fyear = String(newDate.getFullYear());
	const year = fyear.substring(2, 4);
	const month = newDate.getMonth() + 1;
	const date = newDate.getDate();
	// const day = newDate.getDay();
	// const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

	return (
		<Container>
			<h1>MOVIE APP</h1>
			<Today>{`${year}년 ${month}월${date}일`}</Today>
			<Weather />
		</Container>
	);
};

export default Header;

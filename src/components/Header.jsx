import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';
import bgimg from './asset/header_z100.jpg';
import logo from './asset/header_z200.png';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	height: 80px;
	margin: 0 auto;
	background-image: url(${bgimg});
	background-repeat: no-repeat;
	background-size: cover;
	> h1 {
		position: absolute;
		left: 0;
		top: 10px;
		width: 100%;
		height: 80px;
		text-indent: -9999px;
		background-image: url(${logo});
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: contain;
	}
`;
const Today = styled.p`
	margin-right: 20px;
	padding-bottom: 15px;
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
			<h1>LOGO</h1>
			<Today>{`${year}년 ${month}월${date}일`}</Today>
			<Weather />
		</Container>
	);
};

export default Header;

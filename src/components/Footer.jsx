import React, { useState } from 'react';
import styled from 'styled-components';
import imgFooter from './asset/footer_z100.png';
import imgBtnLeft from './asset/btn_left_z200.png';
import imgBtnRight from './asset/btn_right_z200.png';

const Container = styled.div`
	position: fixed;
	z-index: 300;
	bottom: 0;
	width: 100%;
	height: 150px;
	background-image: url(${imgFooter});
	background-size: cover;
`;

const BottomMenu = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	width: 560px;
	height: 72px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const Button = styled.button`
	width: 59px;
	height: 72px;
	background-color: initial;
	border: none;
`;

const BtnLeft = styled(Button)`
	background-image: url(${imgBtnLeft});

	&:hover {
		background-position: -59px 0;
	}
`;

const BtnRight = styled(Button)`
	background-image: url(${imgBtnRight});

	&:hover {
		background-position: -59px 0;
	}
`;

const PrevDay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	padding-top: 10px;
	color: #445d7f;
	font-weight: 400;
	font-size: 30px;
`;

const PrevD = styled.p`
	color: #78a7e6;
	font-size: 50px;
	padding-bottom: 14px;
`;

const Day = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 140px;
	padding-top: 20px;
	color: #445d7f;
	font-weight: 400;
	font-size: 38px;
`;

const D = styled.p`
	color: #fff;
	padding-bottom: 30px;
	font-size: 80px;
`;

const NextDay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	padding-top: 10px;
	color: #445d7f;
	font-weight: 400;
	font-size: 30px;
`;

const NextD = styled.p`
	color: #78a7e6;
	padding-bottom: 14px;
	font-size: 50px;
`;

const Footer = () => {
	const newDate = new Date();
	let prevNumber = 0;
	let onDay = 0;
	let nextNumber = 1;
	let toDay = newDate.getDate() + onDay;
	let prevDay = newDate.getDate() - 1;
	let nextDay = newDate.getDate() + 1;
	let [today, setToday] = useState(toDay);
	let [prevday, setPrevday] = useState(prevDay);
	let [nextday, setNextday] = useState(nextDay);
	const prevDate = new Date();
	let test = prevDate.getDate();
	console.log('어제날짜는 =', test);

	return (
		<Container>
			<BottomMenu>
				<BtnLeft
					onClick={() => {
						prevNumber = prevNumber - 1;
						nextNumber = nextNumber - 2;
						onDay = onDay - 1;
						setPrevday(prevday + prevNumber);
						setToday(today + onDay);
						setNextday(nextday + nextNumber);
					}}
				/>
				<PrevDay>
					<PrevD>{prevday}</PrevD>일
				</PrevDay>
				<Day>
					<D>{today}</D>일
				</Day>
				<NextDay>
					<NextD>{nextday}</NextD>일
				</NextDay>
				<BtnRight
					onClick={() => {
						prevNumber = prevNumber + 1;
						onDay = onDay + 1;
						setPrevday(prevday + prevNumber);
						setToday(today + onDay);
						setNextday(nextday + nextNumber);
					}}
				/>
			</BottomMenu>
		</Container>
	);
};

export default Footer;

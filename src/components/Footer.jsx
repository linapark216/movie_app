import React from 'react';
import styled from 'styled-components';
import imgFooter from './asset/footer_z100.png';

const Container = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 150px;
	background-image: url(${imgFooter});
	background-size: cover;
	background-color: yellow;
`;

const Footer = () => {
	return <Container>푸터입니다</Container>;
};

export default Footer;

import styled from "styled-components";

export const Box = styled.div`
	padding: 2.5% 0%;
	background: #181A1B;
	position: fixed;
    justify-content: center;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	height:2vh;



`;


export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-height:0vh;
	
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: grey;
	padding-top:2vh;

	@media (max-height: 268px) {
		font-size:4vh;
	}
	
`;

export const Row = styled.div`
	justify-content: center;

    color: white;
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 0px;

	// @media (max-width: 1000px) {
	// 	grid-template-columns: repeat(
	// 		auto-fill,
	// 		minmax(200px, 1fr)
	// 	);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	position: static;
	transition: all 0.3s ease-in-out; 
	


	// &:hover {
	// 	transform: rotate(360deg); 
	// 	text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 35px #00FFFF; 
	// 	color: #FFF; 
	// }
`;



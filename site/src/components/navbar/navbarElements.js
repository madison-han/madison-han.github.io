import { NavLink as Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";


const glowingText = keyframes `
	0% { filter: drop-shadow(0 0 10px #00ffff); }
	70% { filter: drop-shadow(0 0 14px #00FFFF, 0 0 24px #00FFFF, 0 0 37px #00FFFF); }
	90% { filter: drop-shadow(0 0 18px #00FFFF, 0 0 28px #00FFFF, 0 0 41px #00FFFF); }
	/* 100% { filter: drop-shadow(0 0 10px #00ffff); } */
   
`;
   

export const Nav = styled.nav`
	background: #181A1B;
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	// padding: 0.2rem calc((100vw - 1000px) / 2);
	z-index: 12;
	margin-left:0vh;
`;


export const NavLink = styled(Link)`
	color: #ffffff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #00d8d8b9;
	}

	&.hover {
		animation: ${glowingText} 2s;
	}

`;


   


export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;



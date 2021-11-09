import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { device } from "../config/breakpoints";

const Logo = styled.h1`
	display: inline-block;
	color: ${(props) =>
		props.color === "dark" ? darkTheme.text : darkTheme.body};
	font-family: "Pacifico", cursive;

	position: fixed;
	left: 2rem;
	top: 2rem;
	z-index: 3;

	@media only screen and (${device.md}) {
		left: 1rem;
		top: 1rem;
		font-size: 1.5rem;
	}
`;

const LogoComponent = (props) => {
	return <Logo color={props.theme}>&#60;sleek&#47;&#62;</Logo>;
};

export default LogoComponent;

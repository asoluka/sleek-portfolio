import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import styled from "styled-components";
import { NodeJs, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { device } from "../config/breakpoints";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media only screen and (${device.md}) {
		flex-wrap: wrap;
	}
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;
	cursor: pointer;

	font-family: "Ubuntu Mono", monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}

	@media only screen and (${device.md}) {
		width: 50vw;
		height: auto;
		margin-top: 70px;
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1rem + 1vw);

	${Main}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}

	& > *:first-child {
		margin-right: 1rem;
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6rem + 1vw);
	padding: 0.5rem 0;

	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}

	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	ul,
	p {
		margin-left: 2rem;
	}
`;

const MySkillsPage = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Box>
				<LogoComponent theme="light" />
				<PowerButton />
				<SocialIcons theme="light" />
				<ParticleComponent theme="light" />
				<Main>
					<Title>
						<Develope width={40} height={40} /> Frontend Developer
					</Title>
					<Description>I consider myself a frontend craftsman.</Description>
					<Description>
						<strong>Skills</strong>
						<p>
							Html, CSS, Js, React, Redux, StoryBook, Sass, Bootstrap, Tailwind,
							Webpack etc.
						</p>
					</Description>
					<Description>
						<strong>Tools</strong>
						<p>VScode, Github, Codepen etc.</p>
					</Description>
				</Main>
				<Main>
					<Title>
						<NodeJs width={40} height={40} /> Backend Developer
					</Title>
					<Description>
						I value business or brand for which i'm creating, thus i enjoy
						bringing new ideas to life.
					</Description>
					<Description>
						<strong>Skills</strong>
						<p>Node.js, Express, MongoDB, MySQL, PhP, Firebase etc.</p>
					</Description>
					<Description>
						<strong>Tools</strong>
						<p>VScode, Github, Webpack, MongoDB Compass etc.</p>
					</Description>
				</Main>
				<BigTitle text="SKILLS" top="80%" right="30%" />
			</Box>
		</ThemeProvider>
	);
};

export default MySkillsPage;

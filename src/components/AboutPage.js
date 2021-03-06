import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { device } from "../config/breakpoints";

import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const float = keyframes`
	0% { transform: translateY(-10px)}
	50% { transform: translateY(-10px) translateX(15px)}
	100% { transform: translateY(-10px)}
`;

const Spaceman = styled.div`
	position: absolute;
	top: 10%;
	right: 5%;
	width: 20vw;
	animation: ${float} 4s ease infinite;

	img {
		width: 100%;
		height: auto;
	}

	@media only screen and (${device.md}) {
		top: 2rem;
	}
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	padding: 2rem;
	width: 50vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: calc(0.6rem + 1vw);
	backdrop-filter: blur(4px);
	position: absolute;
	left: calc(5rem + 5vw);
	top: 10rem;

	font-family: "Ubuntu Mono", monospace;
	font-style: italic;

	p {
		margin-bottom: 2rem;
	}

	@media only screen and (${device.md}) {
		height: auto;
		top: 6rem;
	}
`;

const AboutPage = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<PowerButton />
				<SocialIcons theme="dark" />
				<ParticleComponent theme="dark" />

				<Main>
					<p>
						I'm a fullstack developer located in Nigeria. I love to create
						simple yet beautiful websites with great user experience.
					</p>
					<p>
						I'm interested in the whole web development stack, I like trying new
						things and building great projects. I'm an independent freelancer
						and very soon, I hope to start (v)blogging too.
					</p>
					<p>
						I love to teach programming to newbies. I believe everything can be
						learnt and enjoyed if approached the right weay. You can connect
						with me via the social links.
					</p>
				</Main>

				<BigTitle text="ABOUT" top="10%" left="5%" />

				<Spaceman>
					<img src={astronaut} alt="spaceman" />
				</Spaceman>
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;

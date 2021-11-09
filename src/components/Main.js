import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { ReactIcon } from "./AllSvgs";
import Intro from "./Intro";
import { device } from "../config/breakpoints";
import AppContext from "../state/AppContext";

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Karia", sans-serif;
		font-weight: 500;
	}
`;

const Container = styled.div`
	padding: 2rem;
`;

const Contact = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 1;

	@media only screen and (${device.md}) {
		top: 1.4rem;
		font-size: 0.8rem;
	}
`;

const Blog = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 1;

	@media only screen and (${device.md}) {
		right: calc(1.35rem + 2vw);
		font-size: 0.8rem;
	}
`;

const Work = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	left: calc(1rem + 2vw);
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 1;

	@media only screen and (${device.md}) {
		left: calc(1.35rem + 2vw);
		font-size: 0.8rem;
	}
`;

const BottomBar = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;

	display: flex;
	justify-content: space-evenly;

	@media only screen and (${device.md}) {
		font-size: 0.8rem;
	}
`;

const About = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 1;
`;

const Skills = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
`;

const rotate = keyframes`
	from{
		transform: rotate(0)
	}
	to {
		transform: rotate(360deg)
	}
`;

const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.click ? "85%" : "50%")};
	left: ${(props) => (props.click ? "92%" : "50%")};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;

	& > :first-child {
		animation: ${rotate} infinite 10s linear;
	}

	& > :last-child {
		display: ${(props) => (props.click ? "none" : "inline-block")};
		padding-top: 1rem;
	}

	@media only screen and (${device.md}) {
		left: ${(props) => (props.click ? "90%" : "50%")};
	}
`;

const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	background-color: #000;
	bottom: 0;
	right: 50%;
	width: ${(props) => (props.click ? "50%" : "0%")};
	height: ${(props) => (props.click ? "100%" : "0%")};
	z-index: 1;
	transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<MainContainer>
			<DarkDiv click={click} />
			<Container>
				<PowerButton />
				<LogoComponent theme={click ? "dark" : "light"} />
				<SocialIcons theme={click ? "dark" : "light"} />

				<Center click={click}>
					<AppContext.Consumer>
						{(pageWidth) => {
							let width = "100";
							click && pageWidth <= 768
								? (width = 50)
								: pageWidth <= 768
								? (width = 100)
								: (width = 150);
							return (
								<ReactIcon
									onClick={handleClick}
									width={width}
									height={width}
									fill="currentColor"
								/>
							);
						}}
					</AppContext.Consumer>
					<span>click here</span>
				</Center>

				<Contact
					target="_blank"
					to={{ pathname: "mailto:stracool9@gmail.com" }}
				>
					<motion.h3
						initial={{
							y: -200,
							transition: { type: "spring", duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: "spring", duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Say Hi... 🤗
					</motion.h3>
				</Contact>

				<Blog to="/blog">
					<motion.h3
						initial={{
							y: -200,
							transition: { type: "spring", duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: "spring", duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Blog 📓
					</motion.h3>
				</Blog>

				<Work to="/work" click={click}>
					<motion.h3
						initial={{
							y: -200,
							transition: { type: "spring", duration: 1.5, delay: 1 },
						}}
						animate={{
							y: 0,
							transition: { type: "spring", duration: 1.5, delay: 1 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Work 💼
					</motion.h3>
				</Work>

				<BottomBar>
					<About to="/about" click={click}>
						<motion.h3
							initial={{
								y: 200,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							About 👦
						</motion.h3>
					</About>
					<Skills to="/skills">
						<motion.h3
							initial={{
								y: 200,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							My Skills 🏆
						</motion.h3>
					</Skills>
				</BottomBar>
			</Container>
			{click ? <Intro click={click} /> : null}
		</MainContainer>
	);
};

export default Main;

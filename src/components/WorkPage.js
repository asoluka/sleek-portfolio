import React, { useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";

import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import Card from "../subComponents/Card";
import { ReactIcon } from "../components/AllSvgs";
import { device } from "../config/breakpoints";

import { Work } from "../data/WorkData";
import BigTitle from "../subComponents/BigTitle";
import AppContext from "../state/AppContext";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	height: 300vh;
	position: relative;

	display: flex;
	align-items: center;

	@media only screen and (${device.md}) {
		height: 500vh;
	}
`;

const Main = styled(motion.ul)`
	position: fixed;
	top: 12rem;
	left: calc(10rem + 15vw);
	height: 40vh;
	display: flex;

	color: white;

	@media only screen and (${device.md}) {
		left: calc(6rem + 6vw);
	}
`;

const Rotate = styled.span`
	display: block;
	position: fixed;
	bottom: 2rem;
	right: 1rem;
	/* width: 80px; */
	z-index: 1;
`;

const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const WorkPage = () => {
	const ref = useRef(null);
	const reactIcon = useRef(null);

	useEffect(() => {
		let element = ref.current;

		const rotate = () => {
			element.style.transform = `translateX(${-window.pageYOffset}px)`;
			reactIcon.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
		};

		window.addEventListener("scroll", rotate);

		return () => {
			window.removeEventListener("scroll", rotate);
		};
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<PowerButton />
				<SocialIcons theme="dark" />

				<Main ref={ref} variants={container} initial="hidden" animate="show">
					{Work.map((d) => (
						<Card key={d.id} data={d} />
					))}
				</Main>

				<Rotate ref={reactIcon}>
					<AppContext.Consumer>
						{(pageWidth) => {
							let width = "";
							pageWidth <= 768 ? (width = 50) : (width = 100);
							return (
								<ReactIcon width={width} height={width} fill={darkTheme.text} />
							);
						}}
					</AppContext.Consumer>
				</Rotate>

				<BigTitle text="WORK" top="10%" right="20%" />
			</Box>
		</ThemeProvider>
	);
};

export default WorkPage;

import React, { useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import Card from "../subComponents/Card";
import { ReactIcon } from "../components/AllSvgs";

import { Work } from "../data/WorkData";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	height: 300vh;
	position: relative;

	display: flex;
	align-items: center;
`;

const Main = styled.ul`
	position: fixed;
	top: 12rem;
	left: calc(10rem + 15vw);
	height: 40vh;
	display: flex;

	color: white;
`;

const Rotate = styled.span`
	display: block;
	position: fixed;
	bottom: 2rem;
	right: 1rem;
	width: 80px;
	z-index: 1;
`;

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

				<Main ref={ref}>
					{Work.map((d) => (
						<Card keu={d.id} data={d} />
					))}
				</Main>

				<Rotate ref={reactIcon}>
					<ReactIcon width={80} height={80} fill={darkTheme.text} />
				</Rotate>

				<BigTitle text="WORK" top="10%" right="20%" />
			</Box>
		</ThemeProvider>
	);
};

export default WorkPage;
